import React from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';

const Selector = () => {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={12}>
                        <Card hoverable>Job</Card>
                    </Col>
                    <Col span={12}>
                        <Card hoverable>Service</Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Card hoverable>Restaurant</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable>Tech</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable>Learning</Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Selector;
