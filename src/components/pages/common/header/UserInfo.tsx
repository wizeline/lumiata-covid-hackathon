import React from 'react';
import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';

const UserInfo = () => {
    return (
        <Row>
            <Col span={7}>
                <Button>Notifications</Button>
            </Col>
            <Col span={10}>
                <div>Username</div>
            </Col>
            <Col span={7}>
                <Button>Profile</Button>
            </Col>
        </Row>
    );
};

export default UserInfo;
