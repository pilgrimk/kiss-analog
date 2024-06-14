using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Text.Json.Serialization;

namespace kiss_api.Models
{
    public class Posts
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? title { get; set; }
        public string? desc { get; set; }
        public string? photo { get; set; }
        public string? username { get; set; }

        [JsonPropertyName("categoryIds")]
        public List<string> categories { get; set; } = null!;
        public DateTime? createdAt { get; set; }
        public DateTime? updatedAt { get; set; }

        [BsonRepresentation(BsonType.Int32)]
        public int __v { get; set; }
    }
}
