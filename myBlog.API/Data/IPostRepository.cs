using System.Threading.Tasks;
using myBlog.API.Helpers;
using myBlog.API.Models;
namespace myBlog.API.Data
{
    public interface IPostRepository
    {
        void Add<T>(T entity) where T: class;

        void Delete<T>(T entity) where T: class;

        Task<bool> SaveAll();

        Task<PagedList<Post>> GetPosts(PostParams postParams);

        Task<Post> GetPost(int id);
    }
}