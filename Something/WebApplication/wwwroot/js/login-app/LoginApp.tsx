import * as React from 'react';

import './../global.scss';
import './login-app.scss';

import { LoginForm } from './components/LoginForm';
import { LoginSplash } from './components/LoginSplash'

export default class Login extends React.Component<{}, {}> {
    render() {
        return <div className='login-signup login-signup--login'>
            <LoginSplash />
            <LoginForm />
        </div>;
    }
}