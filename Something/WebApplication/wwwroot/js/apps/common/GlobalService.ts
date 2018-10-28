import { IAuthenticationProps } from "../authentication/types/IAuthenticationProps";
import { IOnboardingProps } from "../onboarding/types/IOnboardingProps";
import { IDashboardProps } from "../dashboard/types/IDashboardProps";
import { IHomeProps } from "../home/types/IHomeProps";

export const GlobalService = {
    getAuthPageParams() : IAuthenticationProps { return (window as any).params as IAuthenticationProps; },
    getOnboardingPageParams(): IOnboardingProps { return (window as any).params as IOnboardingProps; },
    getHomePageParams(): IHomeProps { return (window as any).params as IHomeProps; },
    getDashboardParams(): IDashboardProps { return (window as any).params as IDashboardProps; },
};
