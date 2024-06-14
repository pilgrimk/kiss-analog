using kiss_api.Models;
using kiss_api.Services;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kiss_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoriesService _categoriesService;

        public CategoriesController(ICategoriesService categoriesService)
        {
            _categoriesService = categoriesService;
        }

        // GET: api/categories
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var categories = await _categoriesService.GetAsync();
            return Ok(categories);
        }

        // GET api/categories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var category = await _categoriesService.GetByIdAsync(id);
            if (category == null) {
                return NotFound();
            }
            return Ok(category);
        }

        // POST api/categories
        [HttpPost]
        public async Task<IActionResult> Post(Categories category)
        {
            await _categoriesService.CreateAsync(category);
            return Ok("created successfully");
        }

        // PUT api/categories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] Categories newCategory)
        {
            var category = await _categoriesService.GetByIdAsync(id);
            if (category == null) { return NotFound(); }

            await _categoriesService.UpdateByIdAsync(id, newCategory);
            return Ok("updated successfully");
        }

        // DELETE api/categories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var category = await _categoriesService.GetByIdAsync(id);
            if (category == null) { return NotFound(); }

            await _categoriesService.DeleteAsync(id);
            return Ok("deleted successfully");
        }
    }
}
