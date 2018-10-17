using Database.EntityFramework;
using Service.VM.Project;
using System;
using System.Collections.Generic;

namespace Service.Services.Project
{
    public class ProjectService : IProjectService
    {
        private readonly ApplicationDbContext _dbContext;

        public ProjectService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int CreateProject(ProjectCreateVM project, Guid createdBy)
        {
            var projectToBeCreated = new Database.Entities.Project
            {
                CompanyId = project.CompanyId,
                Name = project.Name,
                CreatedBy = createdBy,
                CreatedOn = DateTime.Now
            };

            _dbContext.Projects.Add(projectToBeCreated);
            _dbContext.SaveChanges();

            return projectToBeCreated.ProjectId;
        }

        public IEnumerable<ProjectVM> GetProjects(int companyId)
        {
            throw new NotImplementedException();
        }
    }
}
