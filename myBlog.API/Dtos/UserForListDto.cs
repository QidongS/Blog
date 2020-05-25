using System;
namespace myBlog.API.Dtos
{
    public class UserForListDto
    {
        public int Id {get; set;}
        public string UserName {get; set;}

        public string avatarUrl{get; set;}

        public DateTime Created{get; set;}

        public string Email { get; set;}

        public string Bio { get; set; }

        public int Level {get; set;}


    }
}