import * as React from "react";
import { Alert, Button, Form, Input } from "antd";

const classNames = require("classnames");
const FormItem = Form.Item;

import { ProjectService } from "../../services/ProjectService";

import "./CreateProject.scss";

export class CreateProject extends React.Component<CreateProject.Props, CreateProject.State> {
    public static displayName = "CreateProject";
    constructor(props: CreateProject.Props) {
        super(props);
        this.state = {
            hasError: false,
            projectName: "",
        };
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.createProject = this.createProject.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="ant-row">
                {this.renderForm()}
                <hr className="ant-col-md-24 CreateProject__hr" />
                {this.renderError()}
            </div>
        );
    }

    private renderForm(): JSX.Element {
        return <Form
            className="ant-col-md-24 CreateProject"
        >
            <p>
                <b>
                    Create a new Project
                </b>
            </p>
            <p>Project helps you group issues, set project specific milestones/sprints, categories and more.</p>
            <b>Project name</b>
            <FormItem>
                <Input
                    className="ant-input-lg CreateProject__input"
                    placeholder="Project X"
                    name="ProjectName"
                    onChange={this.onChangeProjectName}
                    autoFocus
                />
            </FormItem>
            <FormItem>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={this.getButtonCssClasses()}
                    onClick={this.createProject}
                >
                    Create Organization
                </Button>
            </FormItem>
        </Form>;
    }

    private renderError(): JSX.Element {
        return this.state.hasError ?
            <Alert
                className="ant-col-md-24"
                message="Oops! Something went wrong."
                description="There was an error creating your project. Please try again in sometime."
                type="error"
            /> : null;
    }

    private getButtonCssClasses(): string {
        return classNames("login-form-button", "ant-btn--rounded",
            { "ant-btn--disabled": !(this.state.projectName && this.state.projectName.length >= 3) },
        );
    }

    private onChangeProjectName(e: any) {
        const name = e.target.value;
        this.setState(function (state, props) {
            return {
                projectName: name
            }
        });
    }

    private createProject() {
        const that = this;
        ProjectService.post(this.props.organizationId, this.state.projectName)
            .then((response) => response.text())
            .then((organizationId) => that.onOrganizationCreated(organizationId))
            .catch((response) => that.setState({ hasError: true }));
    }

    private onOrganizationCreated(organizationId: number) {
        if (this.props.isOnboarding) {
            this.props.onCreateCallback(CreateProject.displayName);
        }
    }
}
