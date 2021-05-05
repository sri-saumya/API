using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using practiceApi.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace practiceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalController : ControllerBase
    {

        private readonly ProductItemContext _context;

        public CalController(ProductItemContext context)
        {
            _context = context;
        }

        [HttpGet("display")]
        public string display()
        {
            return "Hey api";
        }




        [HttpGet("items")]
        public List<Product> getItems()
        {
            var result = from r in _context.TodoProductItems select r;
            return result.ToList();
        }



        [HttpPost("items")]
        public Product createItem(Product p)
        {
            _context.TodoProductItems.Add(p);
            _context.SaveChanges();
            return p;
        }

        [HttpPut("items/{id}")]
        public Product updateItem(Product p)
        {
            _context.Entry(p).State = EntityState.Modified;
            _context.SaveChanges();
            return p;
        }

    }
}
