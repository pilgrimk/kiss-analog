using kiss_api.Models;

namespace kiss_api.Services
{
    public interface IUsersService
    {
        Task<List<Users>> GetAsync();
        Task<Users> GetByIdAsync(string id);
        Task CreateAsync(Users user);
        Task UpdateByIdAsync(string id, Users user);
        Task DeleteAsync(string id);
    }
}