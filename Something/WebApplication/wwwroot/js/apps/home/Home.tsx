import * as React from "react";
import { Button } from "antd";

import "./Home.scss";
import { IHomeProps } from "./types/IHomeProps";

export const Home : React.SFC<IHomeProps> = () => {
    return <div className="Home">
        <h1>Something.</h1>
        <p>An open source project and issue management app that doesn't suck!</p>
        <div className="Home__btns">
            <a
                className="Home__btns--default Home__btns--yellow"
                href="/account/login">
                Login
            </a>
            <a
                className="Home__btns--default Home__btns--yellow"
                href="/account/register">
                Register
            </a>
        </div>
        <div className="Home__gallery">
            <img src="https://cdn.dribbble.com/users/399068/screenshots/5374838/2018-10-10_155047.png" />
        </div>
    </div>;
}
