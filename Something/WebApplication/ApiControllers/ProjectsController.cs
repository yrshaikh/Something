﻿using Common.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.Services.Project;
using Service.Services.Sprint;
using Service.VM.Project;

namespace WebApplication.ApiControllers
{
    [Produces("application/json")]
    [Route("api/Projects")]
    public class ProjectsController : BaseApiController
    {
        private readonly IProjectService _projectService;
        private readonly ISprintService _sprintService;

        public ProjectsController(UserManager<ApplicationUser> userManager
            , IProjectService projectService
            , ISprintService sprintService) : base(userManager)
        {
            _projectService = projectService;
            _sprintService = sprintService;
        }

        // POST: api/Companies
        [HttpPost]
        public IActionResult Post([FromBody]ProjectCreateVM project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var projectId = _projectService.CreateProject(project, GetUserId());
            var sprintId = _sprintService.CreateBackLogSprint(projectId);

            return CreatedAtAction("Get", new { id = projectId }, projectId);
        }
    }
}