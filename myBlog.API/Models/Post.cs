using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace myBlog.API.Models
{
    public class Post
    {
        [BsonId]
        
        public int PostId { get; set; }

        public int UserId { get; set; }

        public DateTime Post_time { get; set;}

        public string Title { get; set; }

        public int Toping {get; set;}

        public string Content {get; set;}
    }
}