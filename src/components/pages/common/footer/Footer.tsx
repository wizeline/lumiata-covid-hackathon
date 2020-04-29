import React from 'react';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;

const BasicFooter = () => {
    return (
        <Footer>
            <Row>
                <Col span={12}>
                    <ul>About</ul>
                    <ul>Contact</ul>
                    <ul>Privacy Policy</ul>
                </Col>
                <Col span={12}>
                    <ul>Powered by Wizeline - Lumiata</ul>
                    <ul>2020</ul>
                </Col>
            </Row>
        </Footer>
    );
};

export default BasicFooter;
