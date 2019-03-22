import * as React from "react";
import { NavigationMenu } from "../common/components/NavigationMenu/NavigationMenu";
import { Wizard } from "./components/Wizard";
import { Layout } from "antd";
import { PageFooter } from "../common/components/PageFooter/PageFooter";

import "./Onboarding.scss";

const { Content } = Layout;

export const Onboarding: React.SFC = () => {
    return <div className="onboarding ant-row">
        <Layout className="ant-layout--fullheight">
            <NavigationMenu />
            <Layout>
                <Content>
                    <div className="onboarding__title">Welcome on board, let's get you started!</div>
                    <Wizard />
                </Content>
                <PageFooter />
            </Layout>
        </Layout>
    </div>;
};
