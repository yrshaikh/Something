using System;
using Service.ViewModels.Sprint;

namespace Service.Services.Sprint
{
    public interface ISprintService
    {
        int CreateSprint(SprintCreateViewModel sprint);
    }
}
