import * as React from "react";
import { Button } from "antd";

import "./Home.scss";

export const Home : React.SFC = () => {
    return <div className="Home">
        <Button
            type="primary"
            href="/account/login">
            Login
        </Button>
        <Button
            href="/account/register">
            Register
        </Button>
    </div>;
}
