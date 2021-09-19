﻿using Microsoft.AspNetCore.Mvc;
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
        public IActionResult Get()
        {
            var x = _repo.ListInventory();
                return Ok(x); 
         
        }

        // GET api/<InventoryController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            
            try
            {
                var x = _repo.GetInventoryById(id);
                return Ok(x);
            }
            catch
            {
                return Ok("It does not exist");
            }
                
            
        
        }

        // POST api/<InventoryController>
        [HttpPost]
        public  IActionResult Create([FromBody] Inventory x)
        {

            if (!ModelState.IsValid)
            {
                return Ok();
            }

                var t = new Inventory
                {
                    Name = x.Name,
                    Price = x.Price,
                    Stock = x.Stock,
                    CategoryId = x.CategoryId,
                    Description = x.Description,
                 

                };
                var r =  _repo.AddInventory(t);
                return Ok(r);
         

        }

        // PUT api/<InventoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<InventoryController>/5
        //[HttpDelete("{id}")]
        //public  IActionResult Delete(Inventory id)
        //{
        //    //var x =  _repo.DeleteInventory(id);

        //    //return Ok(x);
        //}
    }
}
