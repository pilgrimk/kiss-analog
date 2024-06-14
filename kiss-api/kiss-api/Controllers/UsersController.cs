using kiss_api.Models;
using kiss_api.Services;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kiss_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        // GET: api/categories
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var user = await _usersService.GetAsync();
            return Ok(user);
        }

        // GET api/categories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var user = await _usersService.GetByIdAsync(id);
            if (user == null) {
                return NotFound();
            }
            return Ok(user);
        }

        // POST api/categories
        [HttpPost]
        public async Task<IActionResult> Post(Users user)
        {
            await _usersService.CreateAsync(user);
            return Ok("created successfully");
        }

        // PUT api/categories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Users newUser)
        {
            var user = await _usersService.GetByIdAsync(id);
            if (user == null) { return NotFound(); }

            await _usersService.UpdateByIdAsync(id, newUser);
            return Ok("updated successfully");
        }

        // DELETE api/categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _usersService.GetByIdAsync(id);
            if (user == null) { return NotFound(); }

            await _usersService.DeleteAsync(id);
            return Ok("deleted successfully");
        }
    }
}
