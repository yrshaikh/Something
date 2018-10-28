import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./Home";
import { GlobalService } from "./../common/GlobalService";

const params = GlobalService.getHomePageParams();

ReactDOM.render(
    <Home {...params} />,
    document.getElementById("root"),
);
