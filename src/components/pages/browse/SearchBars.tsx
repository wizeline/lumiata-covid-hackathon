import React from 'react';
import { Col, Row, Input, Select } from 'antd';
import 'antd/dist/antd.css';
import SearchBar from '../common/searchbar/SearchBar';

const { Search } = Input;
const { Option } = Select;

const SearchBars = () => {
    return (
        <Row>
            <Col span={24}>
                <SearchBar />
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
