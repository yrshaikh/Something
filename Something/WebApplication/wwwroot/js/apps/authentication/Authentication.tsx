import * as React from "react";
import { AuthenticationForm } from "./components/AuthenticationForm/AuthenticationForm";
import { Splash } from "./components/Splash/Splash";
import { IAuthenticationProps } from "./types/IAuthenticationProps";

import "./Authentication.scss";

export const Authentication: React.SFC<IAuthenticationProps> = (props: IAuthenticationProps) => {
    return <div className="authentication ant-row">
        <div className="ant-col-md-12 authentication__pane">
            <AuthenticationForm {...props} />
        </div>
        <div className="ant-col-md-12 authentication__pane">
            <Splash pageType={props.pageTypeId} />
        </div>
    </div>;
};
