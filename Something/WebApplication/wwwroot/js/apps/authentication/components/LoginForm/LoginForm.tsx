import * as React from "react";
import { Form, Input, Button, Alert } from "antd";
import { FormComponentProps } from "antd/lib/form";
import "./LoginForm.scss";
import { IAuthenticationProps } from "../../types/IAuthenticationProps";

const FormItem = Form.Item;

class SimpleForm extends React.Component<IAuthenticationProps & FormComponentProps> {

    constructor(props: IAuthenticationProps & FormComponentProps) {
        super(props);
    }

    render () : JSX.Element {
        if (!this.props) { return null }

        const { getFieldDecorator } = this.props.form;
        return <div className="pane ant-col-md-12">
        <Form action="/account/login" method="post" onSubmit={this.handleSubmit} className="LoginForm">
            <h2>Login to your account</h2>
            <b>Email address</b>
            <FormItem>
                {getFieldDecorator("email", {
                rules: [
                    {
                    required: true,
                    message: "Please enter a valid email address."
                    }
                ]
                })(<Input className="ant-input-lg" placeholder="email" name="Email" />)}
            </FormItem>
            <b>Password</b>
            <FormItem>
                {getFieldDecorator("password", {
                rules: [
                    {
                    required: true,
                    message: "Password cannot be left blank."
                    }
                ]
                })(<Input className="ant-input-lg" type="password" placeholder="Password" name="Password" />)}
            </FormItem>
            <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button ovrd-btn">
                Log in
                </Button>
            </FormItem>
            {this.showErrorMessage(this.props.serverError, this.props.failedAttempt)}
            </Form>
          </div>;
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                e.currentTarget.submit();
            }
        });
    }

    showErrorMessage(serverError: boolean, failedAttempt: boolean): JSX.Element {
        let messageHeader: string, messageBody: string;
        if (serverError) {
            messageHeader = "What the duck!";
            messageBody = "Whoops, something went wrong...Unexpected Error.";
        } else if (failedAttempt) {
            messageHeader = "Incorrect Email/Password";
            messageBody = "Please try again or you can reset your password.";
        } else{
            return null;
        }

        return <Alert message={messageHeader} description={messageBody} type="error" showIcon banner />;
    }
}

export const LoginForm = Form.create<IAuthenticationProps>()(SimpleForm);