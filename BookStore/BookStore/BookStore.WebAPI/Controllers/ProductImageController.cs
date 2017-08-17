using BookStore.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.Cors;

namespace BookStore.WebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:61432", headers: "*", methods: "*")]
    public class ProductImageController : ApiController
    {
        private BookStoreEntities db = new BookStoreEntities();
        // GET: api/Product
        public IEnumerable<ProductImage> Get()
        {
            var x = db.ProductImages.AsEnumerable();
            return x.ToList();
        }

        #region other methods
        // GET: api/Product/5
        public string Get(int id)
        {
            var product = db.Products.Where(x => x.ProductID == id).FirstOrDefault();
            return product.ToString();
        }

        // POST: api/Product
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Product/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
        }
        #endregion
    }
}
