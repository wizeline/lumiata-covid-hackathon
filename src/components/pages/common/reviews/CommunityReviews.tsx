import React from 'react';
import { Col, Row, Card } from 'antd';
import 'antd/dist/antd.css';

const CommunityReviews = () => {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={8}>
                        <Card hoverable>Review 1</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable>Review 2</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable>Review 3</Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Card hoverable>Review 4</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable>Review 5</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable>Review 6</Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default CommunityReviews;
