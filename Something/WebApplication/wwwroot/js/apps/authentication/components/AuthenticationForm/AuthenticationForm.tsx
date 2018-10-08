import * as React from "react";
import { Alert, Button, Form, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { IAuthenticationProps } from "../../types/IAuthenticationProps";
import { PageTypes } from "../../../common/PageTypeEnum";
import { LoginDomRepository } from "../../services/LoginDomRepository";
import { RegisterDomRepository } from "../../services/RegisterDomRepository";

import "./AuthenticationForm.scss";

const FormItem = Form.Item;

class SimpleForm extends React.Component<IAuthenticationProps & FormComponentProps> {
    constructor(props: IAuthenticationProps & FormComponentProps) {
        super(props);
    }

    public render(): JSX.Element {

        if (!this.props) {
            return null;
        }

        const container = "AuthForm";

        const domRepository = this.props.pageTypeId === PageTypes.LOGIN ? LoginDomRepository : RegisterDomRepository;

        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form
                    action={domRepository.getFormSubmitLink()}
                    method="post"
                    onSubmit={this.handleSubmit}
                    className={container}
                >
                    <p className={`${container}__title`}>{domRepository.getHeaderText()}</p>
                    <p className={`${container}__subtitle`}>{domRepository.getSubtitleText()}</p>
                    <b>Email address</b>
                    <FormItem>
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    message: "Please enter a valid email address.",
                                    required: true,
                                },
                            ],
                        })(
                            <Input
                                className="ant-input-lg"
                                placeholder="someone@example.com"
                                name="Email"
                            />,
                        )}
                    </FormItem>
                    <b>Password</b>
                    <FormItem>
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    message: "Password cannot be left blank.",
                                    required: true,
                                },
                            ],
                        })(
                            <Input
                                className="ant-input-lg"
                                type="password"
                                placeholder="********"
                                name="Password"
                            />,
                        )}
                    </FormItem>
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button ant-btn--rounded"
                        >
                            {domRepository.getButtonText()}
                         </Button>
                    </FormItem>
                    {this.showErrorMessage(
                        this.props.serverError,
                        this.props.failedAttempt,
                    )}
                    <p className={`${container}__secondaryLink`}>
                        <a href={domRepository.getAlternateLink()}>
                            {domRepository.getAlternateText()}
                        </a>
                    </p>
                </Form>
            </div>
        );
    }

    private handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                e.currentTarget.submit();
            }
        });
    }

    private showErrorMessage = (serverError: boolean, failedAttempt: boolean): JSX.Element => {
        if (!serverError && !failedAttempt) { return null; }

        let messageHeader: string;
        let messageBody: string;
        if (serverError) {
            messageHeader = "Unexpected Error";
            messageBody = "Whoops, something went wrong...";
        } else if (failedAttempt) {
            messageHeader = "Incorrect Email/Password";
            messageBody = "Please try again or you can reset your password.";
        } else {
            return null;
        }

        return (
            <Alert
                message={messageHeader}
                description={messageBody}
                type="error"
                showIcon
                banner
            />
        );
    }
}

export const AuthenticationForm = Form.create<IAuthenticationProps>()(SimpleForm);
