using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using Service.Services.Company;
using System;
using System.Threading.Tasks;
using WebApplication.ApiControllers;
using WebApplication.Tests.Mocks;

namespace WebApplication.Tests.Controllers
{
    [TestFixture]
    public class CompaniesControllerTest
    {
        private Mock<CompaniesController> _controller;
        private Mock<ICompanyService> _companyService;
        private string mockedUserId = "ec18d8c3-ceac-4a8f-871d-97c9912ac68e";

        [SetUp]
        public void Init()
        {
            _companyService = new Mock<ICompanyService>();
            _controller = new Mock<CompaniesController>(MockedUser.GetUserManager(mockedUserId).Object, _companyService.Object) { CallBase = true };
        }

        [Test]
        [TestCase("")]
        [TestCase("\n")]
        [TestCase("AC")]
        public async Task PostMethod_InvalidInput_ReturnsBadRequest(string companyName)
        {
            var result = await _controller.Object.Post(companyName);
            Assert.AreEqual(typeof(BadRequestObjectResult), result.GetType());
        }

        [Test]
        [TestCase("Baman Enterprises")]
        [TestCase("Kasai Express")]
        [TestCase("Khapun Khap")]
        public async Task PostMethod_ValidInput_ReturnsCorrectResponse(string companyName)
        {
            var result = await _controller.Object.Post(companyName);
            _companyService.Verify(x => x.CreateCompanyAsync(companyName, Guid.Parse(mockedUserId)));
            Assert.AreEqual(typeof(CreatedAtActionResult), result.GetType());
        }
    }
}
