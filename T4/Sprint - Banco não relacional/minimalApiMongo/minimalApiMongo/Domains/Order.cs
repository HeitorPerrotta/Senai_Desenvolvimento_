﻿using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace minimalApiMongo.Domains
{
    public class Order
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("date")]
        public DateOnly Date { get; set; }

        [BsonElement("status")]
        public string? Status { get; set; }

        [BsonElement("productId"), BsonRepresentation(BsonType.ObjectId)]
        public List<string>? ProductId { get; set; }
        public List<Product>? Products { get; set; }

        //referenciar ao cliente que fez o pedido
        [BsonElement("clientId"), BsonRepresentation(BsonType.ObjectId)]
        public string? ClientId { get; set; }
        public Client? Client { get; set; }
    }
}
