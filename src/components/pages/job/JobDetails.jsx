import React from 'react';
import { Col, Row, Card } from 'antd';
import 'antd/dist/antd.css';

const JobDetails = () => {
    return (
        <Row>
            <Col span={12}>
                <Row>
                    <Col span={24}>
                        <Card>Job poster profile</Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card>Map placeholer</Card>
                    </Col>
                </Row>
            </Col>
            <Col span={12}>
                <Row>
                    <Card>Job 1</Card>
                </Row>
                <Row>
                    <Card>Job 2</Card>
                </Row>
                <Row>
                    <Card>Job 3</Card>
                </Row>
            </Col>
        </Row>
    );
};

export default JobDetails;
