using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace practiceApi
{
    public class Product
    {
        public int id { get; set; }
        public string title { get; set; }
        public string price { get; set; }
        public string quantity { get; set; }
        public string color { get; set; }
        public string expiryDate { get; set; }
        public bool inStock { get; set; }

    }

   
}
