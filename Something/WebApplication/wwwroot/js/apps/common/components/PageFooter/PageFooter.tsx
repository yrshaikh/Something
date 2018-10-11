import * as React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

import "./PageFooter.scss";

export const PageFooter: React.SFC = () => {
    return <div className="PageFooter">
        <Footer></Footer>
    </div>;
};
