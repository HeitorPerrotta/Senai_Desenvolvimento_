using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Globalization;

namespace minimalApiMongo.Domains
{
    public class Product
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("price")]
        public decimal Price { get; set; }

        public Dictionary<string, string> AdditionalAtrributes { get; set; }

        public Product() 
        {
            AdditionalAtrributes = new Dictionary<string, string>();
        }
    }
}
