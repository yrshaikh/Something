import { PageTypes } from "../../common/PageTypeEnum";
import { BaseParams } from "../../common/types/BaseParams";

export interface IAuthenticationProps extends BaseParams {
    pageTypeId: PageTypes;
    email: string;
    serverError: boolean;
    failedAttempt: boolean;
}