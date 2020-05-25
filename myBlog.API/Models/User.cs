using System;
namespace myBlog.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username {get;set;}

        public byte[] PasswordHash{get;set;}

        public byte[] PasswordSalt{get;set;}

        public DateTime Created {get; set;}

        public string email { get; set;}

        public string bio { get; set; }

        public int level {get; set;}

        public string avatar {get; set;}
    }
}