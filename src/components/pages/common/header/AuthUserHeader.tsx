import React from 'react';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Brand from './Brand';
import UserInfo from './UserInfo';

const { Header } = Layout;

const AuthUserHeader = () => {
    return (
        <Header style={{ color: 'white' }}>
            <Row>
                <Col span={8}>
                    <Brand />
                </Col>
                <Col span={8}></Col>
                <Col span={8}>
                    <UserInfo />
                </Col>
            </Row>
        </Header>
    );
};

export default AuthUserHeader;
