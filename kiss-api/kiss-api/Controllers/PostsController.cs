using kiss_api.Models;
using kiss_api.Services;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kiss_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostsService _postsService;

        public PostsController(IPostsService postsService)
        {
            _postsService = postsService;
        }

        // GET: api/categories
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var categories = await _postsService.GetAsync();
            return Ok(categories);
        }

        // GET api/categories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var category = await _postsService.GetByIdAsync(id);
            if (category == null) {
                return NotFound();
            }
            return Ok(category);
        }

        // POST api/categories
        [HttpPost]
        public async Task<IActionResult> Post(Posts post)
        {
            await _postsService.CreateAsync(post);
            return Ok("created successfully");
        }

        // PUT api/categories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Posts newPost)
        {
            var post = await _postsService.GetByIdAsync(id);
            if (post == null) { return NotFound(); }

            await _postsService.UpdateByIdAsync(id, newPost);
            return Ok("updated successfully");
        }

        // DELETE api/categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var category = await _postsService.GetByIdAsync(id);
            if (category == null) { return NotFound(); }

            await _postsService.DeleteAsync(id);
            return Ok("deleted successfully");
        }
    }
}
