using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using myBlog.API.Models;
namespace myBlog.API.Data
{
    public class UserInfo : IUserInfo
    {
        private readonly DataContext context;

        public UserInfo( DataContext context){
            this.context = context;
        }
        
        public void Add<T>(T entity) where T: class{
            this.context.Add(entity);
        }
        public void Delete<T>(T entity) where T: class{
            this.context.Remove(entity);
        }

        public async Task<bool> SaveAll(){
            return await this.context.SaveChangesAsync() > 0;
        }

        public async Task<User> GetUser(int id){
            var user = await this.context.Users.FirstOrDefaultAsync(u=>u.Id==id);
            return user;

        }
    }
}