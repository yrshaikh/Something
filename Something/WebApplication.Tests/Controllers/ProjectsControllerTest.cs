using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using Service.Services.Project;
using Service.ViewModels.Project;
using System;
using System.Threading.Tasks;
using WebApplication.ApiControllers;
using WebApplication.Tests.Mocks;

namespace WebApplication.Tests.Controllers
{
    [TestFixture]
    public class ProjectsControllerTest
    {
        private Mock<ProjectsController> _controller;
        private Mock<IProjectService> _projectService;
        private readonly string mockedUserId = "ec18d8c3-ceac-4a8f-871d-97c9912ac68e";

        [SetUp]
        public void Init()
        {
            _projectService = new Mock<IProjectService>();
            _controller = new Mock<ProjectsController>(MockedUser.GetUserManager(mockedUserId).Object, _projectService.Object) { CallBase = true };
        }

        [Test]
        public async Task PostMethod_InvalidInput_ReturnsBadRequest()
        {
            _controller.Object.ModelState.AddModelError("key", "error");
            var result = await _controller.Object.Post(It.IsAny<ProjectCreateViewModel>());
            Assert.AreEqual(typeof(BadRequestResult), result.GetType());
        }

        [Test]
        [TestCase(1, "Baman Enterprises")]
        [TestCase(1, "Kasai Express")]
        [TestCase(1, "Khapun Khap")]
        public async Task PostMethod_ValidInput_ReturnsCorrectResponse(int companyId, string projectName)
        {
            var project = new ProjectCreateViewModel();
            project.CompanyId = companyId;
            project.ProjectName = projectName;
            var result = await _controller.Object.Post(project);
            _projectService.Verify(x => 
                x.CreateProject(
                    It.Is<ProjectCreateViewModel>(
                        p => p.CompanyId == companyId && p.ProjectName == projectName)
            ));
            Assert.AreEqual(typeof(CreatedAtActionResult), result.GetType());
        }
    }
}
