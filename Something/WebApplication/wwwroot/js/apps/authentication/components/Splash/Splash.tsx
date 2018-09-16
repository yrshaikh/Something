import * as React from "react";
import "./Splash.scss";

export class Splash extends React.Component {
    render(): JSX.Element {
        return (
            <div className="Splash pane ant-col-md-12">
                <div className="Splash--inner">
                    <div className="Splash--header">Explore Something!</div>
                    <img src="https://cdn.dribbble.com/users/250027/screenshots/4065967/gifmaker.org_gll2rd.gif" />
                </div>
            </div>
        );
    }
}
