import * as React from "react";
import * as ReactDOM from "react-dom";
import { Dashboard } from "./Dashboard";
import { GlobalService } from "./../common/GlobalService";

const params = GlobalService.getAuthPageParams();

ReactDOM.render(
    <Dashboard {...params} />,
    document.getElementById("root"),
);
