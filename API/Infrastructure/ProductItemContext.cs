using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace practiceApi.Infrastructure
{
    public class ProductItemContext : DbContext
    {
        public DbSet<Product> TodoProductItems { get; set; }

        public ProductItemContext(DbContextOptions<ProductItemContext> options) : base(options)
        {

        }
    }
}
