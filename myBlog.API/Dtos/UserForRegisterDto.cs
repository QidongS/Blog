using System.ComponentModel.DataAnnotations;
namespace myBlog.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set;}

        [Required]
        [StringLength(16,MinimumLength=4,ErrorMessage = "Password should have length 4-16")]
        public string Password {get; set;}
    }
}