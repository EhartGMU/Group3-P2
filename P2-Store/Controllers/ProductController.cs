using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using P2_Store.Models;
using P2_Store.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace P2_Store.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private ILogger _logger;
        private IDL _repo;
        public ProductController(ILogger<ProductController> logger, IDL repo)
        {
            _logger = logger;
            _repo = repo;
        }



        // GET: api/<ProductController>
        [HttpGet]
        public IActionResult Get()
        {
            var x = _repo.ListProducts();
            return Ok(x);
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var x = _repo.GetProductById(id);
                return Ok(x);
            }

            catch
            {
                return Ok("It does not exist");
            }
        }

        // POST api/<ProductController>
        [HttpPost]
        public IActionResult Create ([FromBody] Product x )
        {
            var r = _repo.AddProduct(x);

            return Ok(r);

        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(Product id)
        {
            var x = _repo.DeleteProduct(id);
            return Ok(x);

        }
    }
}
