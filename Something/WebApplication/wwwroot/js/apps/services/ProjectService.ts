import { AjaxRequest } from "./AjaxRequest";

export const ProjectService = {
    post(organizationId: number, name: string): Promise<any> {
        return AjaxRequest.post("/api/project", { name, organizationId });
    },
};
