import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { RedditOutlined } from '@ant-design/icons';

const Brand = () => {
    return (
        <Row>
            <Col span={8}>
                <RedditOutlined />
            </Col>
            <Col span={16}>Reddit</Col>
        </Row>
    );
};

export default Brand;
