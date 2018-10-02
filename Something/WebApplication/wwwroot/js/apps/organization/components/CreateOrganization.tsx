import * as React from "react";
import { Alert, Button, Form, Input } from "antd";
import { OrganizationService } from "../../services/OrganizationService";

const classNames = require('classnames');
const FormItem = Form.Item;

import './CreateOrganization.scss';

export class  CreateOrganization extends React.Component<CreateOrganization.Props, CreateOrganization.State> {

    constructor(props: CreateOrganization.Props) {
        super(props);
        this.state = {
            organizationName: ''
        };
        this.onChangeOrgnaizationName = this.onChangeOrgnaizationName.bind(this);
        this.CreateOrganization = this.CreateOrganization.bind(this);
    }

    public render(): JSX.Element {

        if (!this.state) return null;

        return (
            <div className="ant-row">
                <Form
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
                            onClick={this.CreateOrganization}
                        >
                        Create Organization
                        </Button>
                    </FormItem>
                </Form>
                <Alert
                    className="ant-col-md-8"
                    message="Get most out of your organization"
                    description="Organization helps you to group users and projects. You can create mulitple organization, one user can be linked with mulitple organizations"
                    type="info"
                />
                <hr className="ant-col-md-24 CreateOrganization__hr"/>
            </div>
        )
    }

    private getButtonCssClasses() : string {
        return classNames("login-form-button", "ant-btn--rounded",
            { "ant-btn--disabled": !(this.state.organizationName && this.state.organizationName.length >= 3) }
        );
    }

    private onChangeOrgnaizationName(e: any) {
        this.setState({ organizationName: e.target.value });
    }

    private CreateOrganization() {
        OrganizationService.post(this.state.organizationName)
            .then(function(response){
                alert("ok");
            })
            .catch(function(response){
                alert("error");
            });
    }
}