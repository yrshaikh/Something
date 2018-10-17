using System;
using Service.VM.Sprint;

namespace Service.Services.Sprint
{
    public interface ISprintService
    {
        int CreateSprint(SprintCreateVM sprint);
    }
}
