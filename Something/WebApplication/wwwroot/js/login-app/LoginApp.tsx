import * as React from 'react';
import { Form } from 'antd';

import './../global.scss';
import './login-app.scss';

import { LoginForm } from './components/LoginForm';

export default class Login extends React.Component<{}, {}> {
    render() {
        return <div className='login-signup'>
            <LoginForm />
        </div>;
    }
}