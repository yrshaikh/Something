import { PageTypes } from "../../common/PageTypeEnum";
import { BaseParams } from "../../common/types/BaseParams";

export interface IOnboardingProps extends BaseParams {
    pageTypeId: PageTypes;
    stepNumber: number;
}