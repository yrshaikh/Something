using System;
using System.Threading.Tasks;
using Common.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.Services.Project;
using Service.ViewModels.Project;

namespace WebApplication.ApiControllers
{
    [Produces("application/json")]
    [Route("api/Projects")]
    public class ProjectsController : BaseApiController
    {
        private readonly IProjectService _projectService;

        public ProjectsController(UserManager<ApplicationUser> userManager, IProjectService projectService) : base(userManager)
        {
            _projectService = projectService;
        }
        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]ProjectCreateViewModel project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var companyId = _projectService.CreateProject(project);
            return CreatedAtAction("Get", new { id = companyId }, companyId);
        }

        [HttpGet("{id}")]
        public ProjectViewModel Get(int id)
        {
            throw new NotImplementedException();
        }
    }
}