using MongoDB.Driver;
using kiss_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace kiss_api.Services
{
    public class PostsService : IPostsService
    {
        private readonly IMongoCollection<Posts> _postsCollection;
        private readonly IOptions<DBSettings> _dbSettings;

        public PostsService(IOptions<DBSettings> dbSettings) 
        {
            _dbSettings = dbSettings;
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionURI);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _postsCollection = mongoDatabase.GetCollection<Posts>(dbSettings.Value.PostsCollectionName);
        }

        public async Task<List<Posts>> GetAsync()
        {
            return await _postsCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<Posts> GetByIdAsync(string id)
        {
            return await _postsCollection.Find(a => a.Id == id).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Posts post)
        {
            await _postsCollection.InsertOneAsync(post);
            return;
        }

        public async Task UpdateByIdAsync(string id, Posts post )
        {
            await _postsCollection.ReplaceOneAsync(a => a.Id == post.Id, post);
            return;
        }

        public async Task DeleteAsync(string id)
        {
            await _postsCollection.DeleteOneAsync(a => a.Id == id);
            return;
        }
    }
}
