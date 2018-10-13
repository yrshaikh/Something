import { PageTypes } from "./PageTypeEnum";
import { IAuthenticationProps } from "../authentication/types/IAuthenticationProps";
import { IBaseParams } from "./types/BaseParams";
import { IOnboardingProps } from "../onboarding/types/IOnboardingProps";

export const getParams = (pageType: PageTypes): IBaseParams => {
    let params = null;

    switch (pageType) {
        case PageTypes.LOGIN:
        case PageTypes.REGISTER:
            {
                params = (window as any).authParams as IAuthenticationProps;
                break;
            }
        case PageTypes.ONBOARDING:
            {
                params = (window as any).onboardingParams as IOnboardingProps;
                break;
            }
        default:
            break;
    }
    return params;
};
