import * as React from "react";
import { Button } from "antd";

import "./Home.scss";
import { IHomeProps } from "./types/IHomeProps";

export const Home : React.SFC<IHomeProps> = () => {
    return <div className="Home">
        <h1>Something.</h1>
        <p>An open source project and issue management app that doesn't suck!</p>
        <div className="Home__btnHolder">
            <Button
                size="large"
                type="primary"
                href="/account/login">
                Login
            </Button>
            <Button
                size="large"
                href="/account/register">
                Register
            </Button>
        </div>
    </div>;
}
