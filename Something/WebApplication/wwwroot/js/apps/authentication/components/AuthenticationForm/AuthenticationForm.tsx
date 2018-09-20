import * as React from "react";
import { Alert, Button, Form, Input } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { IAuthenticationProps } from "../../types/IAuthenticationProps";
import { IAuthenticationDomRepository } from "../../services/IAuthenticationDomRepository";
import "./AuthenticationForm.scss";
import { PageTypes } from "../../../common/PageTypeEnum";
import { LoginDomRepository } from "../../services/LoginDomRepository";
import { RegisterDomRepository } from "../../services/RegisterDomRepository";

const FormItem = Form.Item;

class SimpleForm extends React.Component<IAuthenticationProps & FormComponentProps> {
    constructor(props: IAuthenticationProps & FormComponentProps) {
        super(props);
    }

    public render(): JSX.Element {

        if (!this.props) {
            return null;
        }

        const domRepository = this.props.pageType === PageTypes.LOGIN ? new LoginDomRepository() : new RegisterDomRepository();

        const { getFieldDecorator } = this.props.form;
        return (
            <div className="pane ant-col-md-12">
                <Form
                    action={domRepository.getFormSubmitLink()}
                    method="post"
                    onSubmit={this.handleSubmit}
                    className="AuthForm"
                >
                    <h2>{domRepository.getHeaderText()}</h2>
                    <p className="subtitle">{domRepository.getSubtitleText()}</p>
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
                            className="login-form-button ovrd-btn"
                        >
                            {domRepository.getButtonText()}
                         </Button>
                    </FormItem>
                    {this.showErrorMessage(
                        this.props.serverError,
                        this.props.failedAttempt,
                    )}
                    <p className="alternatelink"><a href={domRepository.getAlternateLink()}>{domRepository.getAlternateText()}</a></p>
                </Form>
            </div>
        );
    }

    private handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                e.currentTarget.submit();
            }
        });
    }

    private showErrorMessage = (serverError: boolean, failedAttempt: boolean): JSX.Element => {
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
