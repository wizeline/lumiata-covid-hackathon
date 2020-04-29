import React from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';

const Auth = () => {
    return (
        <Row>
            <Col span={12}>
                <Button>Login</Button>
            </Col>
            <Col span={12}>
                <Button>Register</Button>
            </Col>
        </Row>
    );
};

export default Auth;
