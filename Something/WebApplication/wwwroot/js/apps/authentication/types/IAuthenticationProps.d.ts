import { PageTypes } from "../../common/PageTypeEnum";

export interface IAuthenticationProps {
    pageTypeId: PageTypes;
    email: string;
    serverError: boolean;
    failedAttempt: boolean;
}