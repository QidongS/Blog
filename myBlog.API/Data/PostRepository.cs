using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myBlog.API.Models;
using myBlog.API.Helpers;
namespace myBlog.API.Data
{
    public class PostRepository : IPostRepository
    {
        private readonly DataContext context;

        public PostRepository( DataContext context){
            this.context = context;
        }

        public void Add<T>(T entity) where T: class{
            this.context.Add(entity);
        }

        public void Delete<T>(T entity) where T: class{
            this.context.Remove(entity);
        }

        public async Task<bool> SaveAll(){
            return await this.context.SaveChangesAsync()>0;
        }

        public async Task<PagedList<Post>> GetPosts(PostParams postParams){
            var posts = this.context.Posts;
            return await PagedList<Post>.CreateAsync(posts,postParams.PageNumber,postParams.PageSize );
        }

        public async Task<Post> GetPost(int id){
            var user = await this.context.Posts.FirstOrDefaultAsync(p=>p.PostId == id);
            return user;
        }
    }
}