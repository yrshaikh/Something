import * as React from 'react';
import { Row, Col } from 'antd';

import './login.scss';

export default class Login extends React.Component<{}, {}> {

    render() {
        return <div>
            <Row>
                <Col className="splash" span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
        </div>;
    }
}