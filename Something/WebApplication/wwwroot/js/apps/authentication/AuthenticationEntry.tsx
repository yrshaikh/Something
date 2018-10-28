import * as React from "react";
import * as ReactDOM from "react-dom";
import { Authentication } from "./Authentication";
import { GlobalService } from "./../common/GlobalService";

const params = GlobalService.getAuthPageParams();

ReactDOM.render(
    <Authentication {...params} />,
    document.getElementById("root"),
);
