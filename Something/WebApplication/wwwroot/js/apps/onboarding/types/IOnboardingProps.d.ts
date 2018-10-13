import { PageTypes } from "../../common/PageTypeEnum";
import { IBaseParams } from "../../common/types/BaseParams";

export interface IOnboardingProps extends IBaseParams {
    pageTypeId: PageTypes;
    stepNumber: number;
}