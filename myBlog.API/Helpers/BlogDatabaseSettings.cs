using myBlog.API.Models;

namespace myBlog.API.Helpers
{
    public interface IBlogDatabaseSettings
    {
        string CollectionName {get; set;}
        string ConnectionString {get; set;}

        string DatabaseName {get; set;} 
        
        
    }
    public class BlogDatabaseSettings: IBlogDatabaseSettings
    {
        public string CollectionName {get; set;}
        public string ConnectionString {get; set;}

        public string DatabaseName {get; set;} 
    }


}