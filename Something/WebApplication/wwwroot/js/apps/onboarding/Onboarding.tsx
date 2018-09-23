import * as React from "react";

import "./Onboarding.scss";
import { IOnboardingProps } from "./types/IOnboardingProps";

export const Onboarding: React.SFC = () => {
    const params: IOnboardingProps = (window as any).onboardingParams as IOnboardingProps;
    if (!params) return null;

    return <div className="onboarding ant-row">
        <h2>Hello</h2>
    </div>;
};
