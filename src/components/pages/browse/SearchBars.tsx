import React from 'react';
import { Col, Row, Input, Select } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;
const { Option } = Select;

const SearchBars = () => {
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Search placeholder="What do you need?" onSearch={(value) => console.log(value)} enterButton />
                    </Col>
                    <Col span={6}></Col>
                </Row>
                <Row>
                    <Col span={7}>
                        <Select defaultValue="job" style={{ width: 120 }}>
                            <Option value="job">Job</Option>
                            <Option value="service">Service</Option>
                        </Select>
                    </Col>
                    <Col span={7}>
                        <Select defaultValue="restaurants" style={{ width: 120 }}>
                            <Option value="restaurants">Restaurants</Option>
                            <Option value="warehouses">Warehouses</Option>
                        </Select>
                    </Col>
                    <Col span={10}>
                        <Search
                            placeholder="Where are you?"
                            enterButton="OK"
                            size="large"
                            onSearch={(value) => console.log(value)}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default SearchBars;
