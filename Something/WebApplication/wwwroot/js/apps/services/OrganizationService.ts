import { AjaxRequest } from './AjaxRequest';

export const OrganizationService = {
    post(name: string): Promise<any> {
        return AjaxRequest.post('/company/create', { name });
    }
}
