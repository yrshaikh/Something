import * as React from 'react';

import { LoginForm } from './components/LoginForm';
import { Splash } from './components/Splash'

export default class Login extends React.Component<{}, {}> {
    render() {
        return <div className='authentication ant-row'>
            <LoginForm />
            <Splash />
        </div>;
    }
}