import React from 'react';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import SearchResultList from './SearchResultList';
import Map from './Map';

const ListMap = () => {
    return (
        <Row>
            <Col span={12}>
                <SearchResultList />
            </Col>
            <Col span={12}>
                <Map />
            </Col>
        </Row>
    );
};

export default ListMap;
