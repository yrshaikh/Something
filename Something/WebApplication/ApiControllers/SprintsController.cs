using Common.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.Services.Sprint;
using Service.ViewModels.Sprint;
using System;
using System.Threading.Tasks;

namespace WebApplication.ApiControllers
{
    [Produces("application/json")]
    [Route("api/Sprints")]
    public class SprintsController : BaseApiController
    {
        private readonly ISprintService _sprintService;

        public SprintsController(UserManager<ApplicationUser> userManager
            , ISprintService sprintService) : base(userManager)
        {
            _sprintService = sprintService;
        }

        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]SprintCreateViewModel sprint)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var sprintId = _sprintService.CreateSprint(sprint);
            return CreatedAtAction("Get", new { id = sprintId }, sprintId);
        }

        [HttpGet("{id}")]
        public SprintViewModel Get(int id)
        {
            throw new NotImplementedException();
        }
    }
}