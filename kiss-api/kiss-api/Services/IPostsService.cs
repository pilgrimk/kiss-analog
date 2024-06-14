using kiss_api.Models;

namespace kiss_api.Services
{
    public interface IPostsService
    {
        Task<List<Posts>> GetAsync();
        Task<Posts> GetByIdAsync(string id);
        Task CreateAsync(Posts post);
        Task UpdateByIdAsync(string id, Posts post);
        Task DeleteAsync(string id);
    }
}