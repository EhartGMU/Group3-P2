using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using P2_Store.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace P2_Store.Controllers
{
    [Route("api/Inventory")]
    [ApiController]
    public class InventoryController : ControllerBase
    {

        private ILogger _logger;
        private IDL _repo;
        public InventoryController(ILogger<InventoryController> logger, IDL repo)
        {
            _logger = logger;
            _repo = repo;
        }




        // GET: api/<InventoryController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<InventoryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(_repo.GetIventoryById(id));

        }

        // POST api/<InventoryController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<InventoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<InventoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
