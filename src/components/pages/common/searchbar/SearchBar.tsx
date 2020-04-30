import React from 'react';
import { Col, Row, Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

const SearchBar = () => {
    return (
        <Row>
            <Col span={6}></Col>
            <Col span={12}>
                <Search placeholder="What do you need?" onSearch={(value) => console.log(value)} enterButton />
            </Col>
            <Col span={6}></Col>
        </Row>
    );
};

export default SearchBar;
