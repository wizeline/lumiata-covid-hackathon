import React from 'react';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Brand from './Brand';
import Auth from './Auth';

const { Header } = Layout;

const NotAuthUserHeader = () => {
    return (
        <Header style={{ color: 'white' }}>
            <Row>
                <Col span={8}>
                    <Brand />
                </Col>
                <Col span={8}></Col>
                <Col span={8}>
                    <Auth />
                </Col>
            </Row>
        </Header>
    );
};

export default NotAuthUserHeader;
