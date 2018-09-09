using Database.EntityFramework;
using Service.ViewModels.Sprint;

namespace Service.Services.Sprint
{
    public class SprintService : ISprintService
    {
        private readonly ApplicationDbContext _dbContext;

        public SprintService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int CreateSprint(SprintCreateViewModel sprint)
        {
            var sprintToBeCreated = new Database.Entities.Sprint()
            {
                ProjectId = sprint.ProjectId,
                Name = sprint.Name,
                StartDate = null,
                EndDate = null
            };

            _dbContext.Sprints.Add(sprintToBeCreated);
            _dbContext.SaveChanges();

            return sprintToBeCreated.SprintId;
        }
    }
}
