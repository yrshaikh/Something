using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;
using Service.Services.Project;
using Service.Services.Sprint;
using Service.ViewModels.Project;
using Service.ViewModels.Sprint;
using System.Threading.Tasks;
using WebApplication.ApiControllers;
using WebApplication.Tests.Mocks;

namespace WebApplication.Tests.Controllers
{
    [TestFixture]
    public class ProjectsControllerTest : BaseControllerTest
    {
        private Mock<ProjectsController> _controller;
        private Mock<IProjectService> _projectService;
        private Mock<ISprintService> _sprintService;

        [SetUp]
        public void Init()
        {
            _projectService = new Mock<IProjectService>();
            _sprintService = new Mock<ISprintService>();
            _controller = new Mock<ProjectsController>(
                MockedUser.GetUserManager(mockedUserId).Object, 
                _projectService.Object,
                _sprintService.Object
            ) { CallBase = true };
        }

        [Test]
        public async Task PostMethod_InvalidInput_ReturnsBadRequest()
        {
            _controller.Object.ModelState.AddModelError("key", "error");
            var result = await _controller.Object.Post(It.IsAny<ProjectCreateVM>());
            Assert.AreEqual(typeof(BadRequestResult), result.GetType());
        }

        [Test]
        [TestCase(1, "Baman Enterprises")]
        [TestCase(1, "Kasai Express")]
        [TestCase(1, "Khapun Khap")]
        public async Task PostMethod_ValidInput_ReturnsCorrectResponse(int companyId, string projectName)
        {
            var mockedProjectId = 1;
            var sprintName = "Backlog";

            var project = new ProjectCreateVM { CompanyId = companyId, Name = projectName };
            _projectService.Setup(x => x.CreateProject(It.IsAny<ProjectCreateVM>(), mockedUserGuid)).Returns(mockedProjectId);

            var result = await _controller.Object.Post(project);
            _projectService.Verify(x => 
                x.CreateProject(
                    It.Is<ProjectCreateVM>(
                        p => p.CompanyId == companyId && p.Name == projectName), mockedUserGuid
            ));

            _sprintService.Verify(x =>
                x.CreateSprint(
                    It.Is<SprintCreateVM>(
                        p => p.ProjectId == mockedProjectId && p.Name == sprintName)
            ));

            Assert.AreEqual(typeof(CreatedAtActionResult), result.GetType());
        }
    }
}
