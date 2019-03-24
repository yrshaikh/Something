import * as React from "react";
import { AuthenticationForm } from "./components/AuthenticationForm/AuthenticationForm";
import { IAuthenticationProps } from "./types/IAuthenticationProps";

import "./Authentication.scss";

export const Authentication: React.SFC<IAuthenticationProps> = (props: IAuthenticationProps) => {
    return <div className="authentication ant-row">
        <div className="ant-col-md-12 ant-col-offset-6 authentication__pane">
            <AuthenticationForm {...props} />
        </div>
    </div>;
};
