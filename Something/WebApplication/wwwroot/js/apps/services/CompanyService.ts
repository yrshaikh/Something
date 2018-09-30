import { AjaxRequest } from './AjaxRequest';

export const CompanyService = {
    post(companyName: string): Promise<any> {
        return AjaxRequest.post('/company/create', { companyName });
    }
}
