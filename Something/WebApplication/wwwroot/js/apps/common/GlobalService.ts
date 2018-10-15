import { IAuthenticationProps } from "../authentication/types/IAuthenticationProps";
import { IOnboardingProps } from "../onboarding/types/IOnboardingProps";

export const GlobalService = {
    getAuthPageParams() : IAuthenticationProps { return (window as any).authParams as IAuthenticationProps; },
    getOnboardingPageParams() : IOnboardingProps { return (window as any).onboardingParams as IOnboardingProps },
};
