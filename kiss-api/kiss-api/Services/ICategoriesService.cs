using kiss_api.Models;

namespace kiss_api.Services
{
    public interface ICategoriesService
    {
        Task<List<Categories>> GetAsync();
        Task<Categories> GetByIdAsync(string id);
        Task CreateAsync(Categories category);
        Task UpdateByIdAsync(string id, Categories category);
        Task DeleteAsync(string id);
    }
}