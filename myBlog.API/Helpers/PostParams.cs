namespace myBlog.API.Helpers
{
    public class PostParams
    {
        private const int MaxPageSize = 15;
        public int PageNumber { get; set; } = 1;

        private int pageSize = 5;

        public int PageSize{
            get {return pageSize;}
            set { pageSize = (value>MaxPageSize) ? MaxPageSize : value;}
        }
    }
}