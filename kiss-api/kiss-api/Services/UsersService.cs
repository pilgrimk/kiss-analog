using MongoDB.Driver;
using kiss_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;

namespace kiss_api.Services
{
    public class UsersService : IUsersService
    {
        private readonly IMongoCollection<Users> _usersCollection;
        private readonly IOptions<DBSettings> _dbSettings;

        public UsersService(IOptions<DBSettings> dbSettings) 
        {
            _dbSettings = dbSettings;
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionURI);
            var mongoDatabase = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _usersCollection = mongoDatabase.GetCollection<Users>(dbSettings.Value.UsersCollectionName);
        }

        public async Task<List<Users>> GetAsync()
        {
            return await _usersCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<Users> GetByIdAsync(string id)
        {
            return await _usersCollection.Find(a => a.Id == id).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Users user)
        {
            await _usersCollection.InsertOneAsync(user);
            return;
        }

        public async Task UpdateByIdAsync(string id, Users user )
        {
            await _usersCollection.ReplaceOneAsync(a => a.Id == user.Id, user);
            return;
        }

        public async Task DeleteAsync(string id)
        {
            await _usersCollection.DeleteOneAsync(a => a.Id == id);
            return;
        }
    }
}
