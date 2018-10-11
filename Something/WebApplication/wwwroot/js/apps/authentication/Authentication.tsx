import * as React from "react";

import { AuthenticationForm } from "./components/AuthenticationForm/AuthenticationForm";
import { Splash } from "./components/Splash/Splash";
import { IAuthenticationProps } from "./types/IAuthenticationProps";
import { getParams } from "../common/GlobalService";
import { PageTypes } from "../common/PageTypeEnum";

import "./Authentication.scss";

export const Authentication: React.SFC = () => {
    const params = getParams(PageTypes.LOGIN) as IAuthenticationProps;
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
