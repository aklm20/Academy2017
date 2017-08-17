using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStore.AdminSite;
using BookStore.AdminSite.Controllers;
using BookStore.AdminSite.Models;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BookStore.AdminSite.Tests.Controllers
{
    [TestClass]
    public class ProductImagesUnitTest
    {
        [TestMethod]
        public void Index()
        {
            ProductImagesController controller = new ProductImagesController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNotNull(result);
        }
    }
}
