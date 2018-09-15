import * as React from 'react';

import './../global.scss';
import './login-app.scss';

import { LoginForm } from './components/LoginForm/LoginForm';
import { Splash } from './components/Splash/Splash'

export default class Login extends React.Component<{}, {}> {
    render() {
        return <div className='authentication ant-row'>
            <LoginForm />
            <Splash />
        </div>;
    }
}