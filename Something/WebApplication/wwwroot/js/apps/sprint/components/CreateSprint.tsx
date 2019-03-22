import * as React from "react";

import { CreateSprintTypes } from "../types/CreateSprintTypes";

import "./CreateSprint.scss";

export class CreateSprint extends React.Component<CreateSprintTypes.Props, CreateSprintTypes.State> {
    public render(): JSX.Element {
        return (
            <h2>Create Sprint</h2>
        );
    }
}
