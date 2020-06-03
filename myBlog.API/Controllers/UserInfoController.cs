using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using myBlog.API.Data;
using System.Threading.Tasks;
using System.Security.Claims;
using myBlog.API.Dtos;
using AutoMapper;

namespace myBlog.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly IUserInfo userInfo;
        private readonly IMapper mapper; 

        public UserInfoController(IUserInfo userInfo, IMapper mapper){
            this.userInfo = userInfo;
            this.mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id){
            var user = await userInfo.GetUser(id);
            var userToReturn = mapper.Map<UserForListDto>(user);
            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto){
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var user = await userInfo.GetUser(id);
            var userToReturn = mapper.Map<UserForUpdateDto>(user);
            if(await userInfo.SaveAll()){
                return NoContent();
            }
            throw new System.Exception($"Updating user {id} failed on save");
        }


        
    }
}