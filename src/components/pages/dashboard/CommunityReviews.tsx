import React from 'react';
import { Col, Row, Card } from 'antd';
import 'antd/dist/antd.css';

const CommunityReviews = () => {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={8}>
                        <Card hoverable></Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable></Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable></Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Card hoverable></Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable></Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable></Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default CommunityReviews;
