import * as React from "react";
import { Alert, Button, Form, Input } from "antd";
import { CompanyService } from "../../services/CompanyService";

const classNames = require('classnames');
const FormItem = Form.Item;

import './CreateCompany.scss';

export class  CreateCompany extends React.Component<CreateCompany.Props, CreateCompany.State> {

    constructor(props: CreateCompany.Props) {
        super(props);
        this.state = {
            organizationName: ''
        };
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.createCompany = this.createCompany.bind(this);
    }

    public render(): JSX.Element {
        const container = "CreateCompany";

        if (!this.state) return null;

        return (
            <Form
                className={container}
            >
                <b>Orgnaization name</b>
                <FormItem>
                    <Input
                        className="ant-input-lg CreateCompany__input"
                        placeholder="ACME INC"
                        name="Email"
                        onChange={this.onChangeCompanyName}
                    />
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={this.getButtonCssClasses()}
                        onClick={this.createCompany}
                    >
                    Create Organization
                    </Button>
                </FormItem>
                <Alert
                    message="Get most out of your organization"
                    description="Organization helps you to group users and projects. You can create mulitple organization, one user can be linked with mulitple organizations"
                    type="info"
                    showIcon
                />
            </Form>
        )
    }

    private getButtonCssClasses() : string {
        return classNames("login-form-button", "ant-btn--rounded",
            { "ant-btn--disabled": !(this.state.organizationName && this.state.organizationName.length >= 3) }
        );
    }

    private onChangeCompanyName(e: any) {
        this.setState({ organizationName: e.target.value });
    }

    private createCompany() {
        CompanyService.post(this.state.organizationName)
            .then(function(response){
                alert("ok");
            })
            .catch(function(response){
                alert("error");
            });
    }
}