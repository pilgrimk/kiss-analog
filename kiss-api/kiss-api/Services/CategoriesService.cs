using MongoDB.Driver;
using kiss_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace kiss_api.Services
{
    public class CategoriesService : ICategoriesService
    {
        private readonly IMongoCollection<Categories> _categoriesCollection;
        private readonly IOptions<DBSettings> _dbSettings;

        public CategoriesService(IOptions<DBSettings> dbSettings) 
        {
            _dbSettings = dbSettings;
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionURI);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _categoriesCollection = mongoDatabase.GetCollection<Categories>(dbSettings.Value.CategoriesCollectionName);
        }

        public async Task<List<Categories>> GetAsync()
        {
            return await _categoriesCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<Categories> GetByIdAsync(string id)
        {
            return await _categoriesCollection.Find(a => a.Id == id).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Categories category)
        {
            await _categoriesCollection.InsertOneAsync(category);
            return;
        }

        public async Task UpdateByIdAsync(string id, Categories category )
        {
            await _categoriesCollection.ReplaceOneAsync(a => a.Id == category.Id, category);
            return;
        }

        public async Task DeleteAsync(string id)
        {
            await _categoriesCollection.DeleteOneAsync(a => a.Id == id);
            return;
        }
    }
}
