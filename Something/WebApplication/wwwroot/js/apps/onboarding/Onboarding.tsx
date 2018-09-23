import * as React from "react";
import { IOnboardingProps } from "./types/IOnboardingProps";
import { NavigationMenu } from "../common/components/NavigationMenu/NavigationMenu";
import { Wizard } from "./components/Wizard";
import { Layout } from "antd";
import { PageFooter } from "../common/components/PageFooter/PageFooter";

const { Content } = Layout;
import "./Onboarding.scss";

export const Onboarding: React.SFC = () => {
    const params: IOnboardingProps = (window as any).onboardingParams as IOnboardingProps;
    if (!params) { return null; }

    return <div className="onboarding ant-row">
        <Layout style={{ height: "100vh" }}>
            <NavigationMenu />
            <Layout>
            <Content>
                <Wizard />
            </Content>
            <PageFooter />
            </Layout>
        </Layout>
    </div>;
};
