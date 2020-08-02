using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myBlog.API.Models;
using myBlog.API.Helpers;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
namespace myBlog.API.Data
{
    public class PostRepository : IPostRepository
    {
        private readonly IMongoCollection<Post> posts;
        private readonly IMongoDatabase _database = null;
        public PostRepository( IOptions<BlogDatabaseSettings> settings){
            var client = new MongoClient(settings.Value.ConnectionString);
            if(client != null) {
                _database = client.GetDatabase(settings.Value.Database);
            }
            posts = _database.GetCollection<Post>("Post");
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
            try{
               
                return await PagedList<Post>.CreateAsync(this.posts,postParams.PageNumber,postParams.PageSize );

            }catch(Exception ex){
                throw ex;
            }
        }

        public async Task<Post> GetPost(int id){
            // var user = await this.context.Posts.FirstOrDefaultAsync(p=>p.PostId == id);
            // return user;
            
            return await  _posts.FindAsync(p =>p.PostId==id).ToListAsync();

        }
    }
}