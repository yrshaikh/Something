import { PageTypes } from "../../common/PageTypeEnum";

export interface IAuthenticationProps {
    pageType: PageTypes;
    email: string;
    serverError: boolean;
    failedAttempt: boolean;
}