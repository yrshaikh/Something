import * as React from "react";

import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { Splash } from "./components/Splash/Splash";

import "./../Global.scss";
import "./Authentication.scss";
import { IAuthenticationProps } from "./types/IAuthenticationProps";
import { PageTypes } from "../common/PageTypeEnum";

export default class Login extends React.Component<{}, {}> {
    render (): JSX.Element {

        const params:IAuthenticationProps = (window as any).authenticationPageParams as IAuthenticationProps;

        if (!params) {
            return null;
        }

        const form = params.pageType == PageTypes.LOGIN ? <LoginForm {...params} /> : <RegisterForm {...params} />;

        return <div className="authentication ant-row">
            {form}
            <Splash />
        </div>;
    }
}