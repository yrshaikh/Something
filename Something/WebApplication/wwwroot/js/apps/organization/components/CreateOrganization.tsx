import * as React from "react";
import { Alert, Button, Form, Input } from "antd";
import { OrganizationService } from "../../services/OrganizationService";

const classNames = require("classnames");
const FormItem = Form.Item;

import "./CreateOrganization.scss";

export class CreateOrganization extends React.Component<CreateOrganization.Props, CreateOrganization.State> {
    static displayName = 'CreateOrganization';
    constructor(props: CreateOrganization.Props) {
        super(props);
        this.state = {
            hasError: false,
            organizationName: '',
        };
        this.onChangeOrgnaizationName = this.onChangeOrgnaizationName.bind(this);
        this.createOrganization = this.createOrganization.bind(this);
    }

    public render(): JSX.Element {
        if (!this.state) return null;
        return (
            <div className="ant-row">
                {this.renderForm()}
                {this.renderInfo()}
                <hr className="ant-col-md-24 CreateOrganization__hr"/>
                {this.renderError()}
            </div>
        )
    }
    
    private renderForm(): JSX.Element {
        return <Form
            className="ant-col-md-16 CreateOrganization"
        >
            <b>Orgnaization name</b>
            <FormItem>
                <Input
                    className="ant-input-lg CreateOrganization__input"
                    placeholder="ACME INC"
                    name="Email"
                    onChange={this.onChangeOrgnaizationName}
                    autoFocus
                />
            </FormItem>
            <FormItem>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={this.getButtonCssClasses()}
                    onClick={this.createOrganization}
                >
                    Create Organization
                        </Button>
            </FormItem>
        </Form>;
    }

    private renderInfo(): JSX.Element {
        return <Alert
            className="ant-col-md-8"
            message="Get most out of your organization"
            description="Organization helps you to group users and projects. You can create mulitple organization, one user can be linked with mulitple organizations"
            type="info"
        />;
    }

    private renderError(): JSX.Element {
        return this.state.hasError ?
            <Alert
                className="ant-col-md-24"
                message="Oops! Something went wrong."
                description="There was an error creating your orgranization. Please try again in sometime."
                type="error"
            /> : null;
    }

    private getButtonCssClasses(): string {
        return classNames("login-form-button", "ant-btn--rounded",
            { "ant-btn--disabled": !(this.state.organizationName && this.state.organizationName.length >= 3) },
        );
    }

    private onChangeOrgnaizationName(e: any) {
        this.setState({ organizationName: e.target.value });
    }

    private createOrganization() {
        const that = this;
        OrganizationService.post(this.state.organizationName)
            .then(response => response.text())
            .then(organizationId => that.onOrganizationCreated(organizationId))
            .catch(response => that.setState({hasError: true}))
    }

    private onOrganizationCreated(organizationId: number) {
        if (this.props.isOnboarding)
            this.props.onCreateCallback(CreateOrganization.displayName);
    }

}