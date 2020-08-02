using myBlog.API.Models;

namespace myBlog.API.Helpers
{
    public interface IBlogDatabaseSettings
    {
        string ConnectionString {get; set;}

        string Database {get; set;} 
        
        
    }
    public class BlogDatabaseSettings: IBlogDatabaseSettings
    {
        public string ConnectionString {get; set;}

        public string Database {get; set;} 
    }


}