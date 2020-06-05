using Microsoft.EntityFrameworkCore;
using myBlog.API.Models;

namespace myBlog.API.Data

{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){      
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<Post>().HasOne<User>().WithMany().HasForeignKey(p => p.UserId);
        }
        
        public DbSet<Value> Values { get; set; }
        
        //add migration to database
        public DbSet<User> Users { get; set; }

        public DbSet<Post> Posts {get; set;} 
    }
}