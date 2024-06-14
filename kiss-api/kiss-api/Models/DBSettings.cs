namespace kiss_api.Models
{
    public class DBSettings
    {
        public string? ConnectionURI { get; set; }
        public string? DatabaseName { get; set; }
        public string? CategoriesCollectionName { get; set; }
        public string? PostsCollectionName { get; set; }
        public string? UsersCollectionName { get; set; }
    }
}
