using System;
namespace myBlog.API.Models
{
    public class Post
    {
        public int PostId { get; set; }

        public int UserId { get; set; }

        public DateTime Post_time { get; set;}

        public string Title { get; set; }

        public int Toping {get; set;}

        public string Content {get; set;}
    }
}