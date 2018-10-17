import * as React from "react";
import * as ReactDOM from "react-dom";
import { Onboarding } from "./Onboarding";
import { GlobalService } from "../common/GlobalService";

const props = GlobalService.getOnboardingPageParams();

ReactDOM.render(
    <Onboarding {...props} />,
    document.getElementById("root"),
);
