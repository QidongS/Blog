using Microsoft.EntityFrameworkCore;
using myBlog.API.Models;

namespace myBlog.API.Data

{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options){      
        }
        
        public DbSet<Value> Values { get; set; }
    }
}