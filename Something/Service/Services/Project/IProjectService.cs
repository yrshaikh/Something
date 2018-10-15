using Service.ViewModels.Project;
using System;
using System.Collections.Generic;

namespace Service.Services.Project
{
    public interface IProjectService
    {
        IEnumerable<ProjectVM> GetProjects(int companyId);
        int CreateProject(ProjectCreateVM project, Guid createdBy);
    }
}
