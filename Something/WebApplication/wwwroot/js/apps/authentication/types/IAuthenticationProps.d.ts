import { PageTypes } from "../../common/PageTypeEnum";
import { IBaseParams } from "../../common/types/BaseParams";

export interface IAuthenticationProps extends IBaseParams {
    pageTypeId: PageTypes;
    email: string;
    serverError: boolean;
    failedAttempt: boolean;
}