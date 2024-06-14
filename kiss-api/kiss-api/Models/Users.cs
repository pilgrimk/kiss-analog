using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace kiss_api.Models
{
    public class Users
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? username { get; set; }
        public string? email { get; set; }
        public string? password { get; set; }
        public string? profilePic { get; set; }
        public DateTime? createdAt { get; set; }
        public DateTime? updatedAt { get; set; }
        [BsonRepresentation(BsonType.Int32)]
        public int __v { get; set; }
    }
}
