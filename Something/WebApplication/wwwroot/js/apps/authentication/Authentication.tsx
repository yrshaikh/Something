import * as React from "react";

import { AuthenticationForm } from "./components/AuthenticationForm/AuthenticationForm";
import { Splash } from "./components/Splash/Splash";

import "./../Global.scss";
import "./Authentication.scss";
import { IAuthenticationProps } from "./types/IAuthenticationProps";

export const Authentication: React.SFC = () => {
    const params: IAuthenticationProps = (window as any).authParams as IAuthenticationProps;
    if (!params) return null;

    return <div className="authentication ant-row">
        <div className="ant-col-md-12 authentication__pane">
            <AuthenticationForm {...params} />
        </div>
        <div className="ant-col-md-12 authentication__pane">
            <Splash pageType={params.pageTypeId} />
        </div>
    </div>;
};
