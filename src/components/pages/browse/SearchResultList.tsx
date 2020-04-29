import React from 'react';
import { Col, Row, Card } from 'antd';
import 'antd/dist/antd.css';

const SearchResultList = () => {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={12}>
                        <Card></Card>
                    </Col>
                    <Col span={12}>
                        <Card></Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Card></Card>
                    </Col>
                    <Col span={12}>
                        <Card></Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Card></Card>
                    </Col>
                    <Col span={12}>
                        <Card></Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default SearchResultList;
