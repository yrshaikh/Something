import * as React from "react";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { Splash } from "./components/Splash/Splash";

import "./../Global.scss";
import "./Authentication.scss";
import { IAuthenticationProps } from "./types/IAuthenticationProps";

export default class Login extends React.Component<{}, {}> {
    render (): JSX.Element {

        const params:IAuthenticationProps = (window as any).authenticationPageParams as IAuthenticationProps;
        if (!params) {
            return null;
        }

        return <div className="authentication ant-row">
            <LoginForm {...params} />
            <Splash />
        </div>;
    }
}