using Microsoft.AspNetCore.Mvc;
using myBlog.API.Dtos;
using myBlog.API.Models;
using myBlog.API.Data;
using myBlog.API.Helpers;
using System.Threading.Tasks;
using System;

namespace myBlog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController: ControllerBase
    {
        private readonly IPostRepository postRepository;

        public PostController( IPostRepository postRepository){
            this.postRepository = postRepository;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPost(int id){
            var post = await this.postRepository.GetPost(id);
            return Ok(post);
        }

        [HttpGet]
        public async Task<IActionResult> GetPosts([FromQuery]PostParams postParams){
            var posts = await this.postRepository.GetPosts(postParams);
            Response.AddPagination(posts.CurrentPage,posts.PageSize,posts.TotalCount,posts.TotalPages);

            return Ok(posts);
        }
        
        
    }
}