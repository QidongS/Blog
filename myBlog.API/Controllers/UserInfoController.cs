using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using myBlog.API.Data;
using System.Threading.Tasks;
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

        
    }
}