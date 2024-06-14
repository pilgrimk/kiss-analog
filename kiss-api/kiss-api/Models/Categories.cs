using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace kiss_api.Models
{
    public class Categories
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? name { get; set; }
        public DateTime? createdAt { get; set; }
        public DateTime? updatedAt { get; set; }
        [BsonRepresentation(BsonType.Int32)]
        public int __v { get; set; }
    }
}
