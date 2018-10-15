using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using Service.Services.Sprint;
using Service.ViewModels.Sprint;
using System.Threading.Tasks;
using WebApplication.ApiControllers;
using WebApplication.Tests.Mocks;

namespace WebApplication.Tests.Controllers
{
    [TestFixture]
    public class SprintsControllerTest : BaseControllerTest
    {
        private Mock<SprintsController> _controller;
        private Mock<ISprintService> _sprintService;
       
        [SetUp]
        public void Init()
        {
            _sprintService = new Mock<ISprintService>();
            _controller = new Mock<SprintsController>(
                MockedUser.GetUserManager(mockedUserId).Object, 
                _sprintService.Object
            ) { CallBase = true };
        }

        [Test]
        public async Task PostMethod_InvalidInput_ReturnsBadRequest()
        {
            _controller.Object.ModelState.AddModelError("key", "error");
            var result = await _controller.Object.Post(It.IsAny<SprintCreateVM>());
            Assert.AreEqual(typeof(BadRequestResult), result.GetType());
        }

        [Test]
        [TestCase(1, "Baman Enterprises")]
        [TestCase(1, "Kasai Express")]
        [TestCase(1, "Khapun Khap")]
        public async Task PostMethod_ValidInput_ReturnsCorrectResponse(int projectId, string sprintName)
        {
            var project = new SprintCreateVM { ProjectId = projectId, Name = sprintName};
            var result = await _controller.Object.Post(project);

            _sprintService.Verify(x => 
                x.CreateSprint(
                    It.Is<SprintCreateVM>(
                        p => p.ProjectId == projectId && p.Name == sprintName)
            ));

            Assert.AreEqual(typeof(CreatedAtActionResult), result.GetType());
        }
    }
}
