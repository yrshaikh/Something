import * as React from 'react';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form'

import './LoginForm.scss';

const FormItem = Form.Item;

interface LoginProps {
}

class SimpleForm extends React.Component<LoginProps & FormComponentProps> {
    constructor(props: LoginProps & FormComponentProps) {
        super(props);
    }
    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="pane ant-col-md-12">
                <Form onSubmit={this.handleSubmit} className="login">
                    <h2>Login to your account</h2>
                    <b>Email address</b>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input className="ant-input-lg" placeholder="Username" />
                        )}
                    </FormItem>
                    <b>Password</b>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input className="ant-input-lg" type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button ovrd-btn">
                            Log in
                    </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export const LoginForm = Form.create<LoginProps>()(SimpleForm);