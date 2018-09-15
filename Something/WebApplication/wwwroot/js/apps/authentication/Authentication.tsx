import * as React from "react";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { Splash } from "./components/Splash/Splash";

import "./../Global.scss";
import "./Authentication.scss";

export default class Login extends React.Component<{}, {}> {
    render (): JSX.Element {
        return <div className="authentication ant-row">
            <LoginForm />
            <Splash />
        </div>;
    }
}