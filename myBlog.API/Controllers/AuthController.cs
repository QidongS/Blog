using Microsoft.AspNetCore.Mvc;
using myBlog.API.Data;
using System.Threading.Tasks;
using myBlog.API.Models;
using myBlog.API.Dtos;
using System;
namespace myBlog.API.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository repository;
        public AuthController(IAuthRepository repository){
            this.repository=repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetResult(){
            var values = await this.repository.UserExists("abc");

            Console.WriteLine(values);
            return Ok(200);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegister){
            //validation 
            Console.WriteLine("qqq");

            userForRegister.Username = userForRegister.Username.ToLower();
            if(await this.repository.UserExists(userForRegister.Username)){
                return BadRequest("UserName alreay exists");
            }

            var newUser = new User{
                Username = userForRegister.Username
            };

            var createdUser = await repository.Register(newUser, userForRegister.Password);

            //return CreatedAtRoute()
            return StatusCode(201);
        }

        
    }
}