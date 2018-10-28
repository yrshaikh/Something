using Database.EntityFramework;
using Service.VM.Sprint;

namespace Service.Services.Sprint
{
    public class SprintService : ISprintService
    {
        private readonly ApplicationDbContext _dbContext;

        public SprintService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int CreateSprint(SprintCreateVM sprint)
        {
            var sprintToBeCreated = new Database.Entities.Sprint
            {
                ProjectId = sprint.ProjectId,
                Name = sprint.Name,
                StartDate = null,
                EndDate = null,
                IsBackLog = false
            };
            return CreateSprint(sprintToBeCreated);
        }

        public int CreateBackLogSprint(int projectId)
        {
            var sprintToBeCreated = new Database.Entities.Sprint
            {
                ProjectId = projectId,
                Name = null,
                StartDate = null,
                EndDate = null,
                IsBackLog = true
            };
            return CreateSprint(sprintToBeCreated);
        }

        // todo change folder name to resolve the namespace issue.
        private int CreateSprint(Database.Entities.Sprint sprint)
        {
            _dbContext.Sprints.Add(sprint);
            _dbContext.SaveChanges();

            return sprint.SprintId;
        }
    }
}
