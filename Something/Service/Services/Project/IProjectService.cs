using Service.ViewModels.Project;
using System;
using System.Collections.Generic;

namespace Service.Services.Project
{
    public interface IProjectService
    {
        IEnumerable<ProjectViewModel> GetProjects(int companyId);
        int CreateProject(ProjectCreateViewModel project, Guid createdBy);
    }
}
