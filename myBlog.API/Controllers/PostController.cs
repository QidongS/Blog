using Microsoft.AspNetCore.Mvc;
using myBlog.API.Dtos;
using myBlog.API.Models;
using myBlog.API.Data;
using myBlog.API.Helpers;
using System.Threading.Tasks;
using System;
using System.IO;

namespace myBlog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController: ControllerBase
    {
        private readonly PostRepository postRepository;

        public PostController( PostRepository postRepository){
            this.postRepository = postRepository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id){
            var post = await this.postRepository.Get(id);
            return Ok(post);
        }

        [HttpGet]
        public async Task<IActionResult> GetPosts([FromQuery]PostParams postParams){
            Console.WriteLine("in post get");
            //Console.WriteLine(postParams.PageNumber.ToString(),postParams.PageSize.ToString());
            var posts = await this.postRepository.Get(postParams);
            Response.AddPagination(posts.CurrentPage,posts.PageSize,Convert.ToInt32( posts.TotalCount),posts.TotalPages);

            return Ok(posts.postsTobeListed);
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> Add(int id){
            Post post = new Post();
            //string text;
            var fileStream = new FileStream("/home/qidong/Documents/developmentNotes/note2.md", FileMode.Open);
            string s;
            using (StreamReader reader = new StreamReader(fileStream)){
                s = await reader.ReadToEndAsync();
            }

            post.PostId = 2;
            post.UserId = 0;
            post.Title = "First Post";
            post.Likes = 0;
            post.Content = s;
            
            
            postRepository.Add(post);
            return Ok();
        }
        
        
    }
}