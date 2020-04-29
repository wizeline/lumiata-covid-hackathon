import React from 'react';
import { Layout, Row } from 'antd';
import 'antd/dist/antd.css';
import SearchBars from './SearchBars';
import Selector from './Selector';

const { Content } = Layout;

const DashboardContent = () => {
    return (
        <Content>
            <SearchBars />
            <Selector />
            <Row>Community Reviews</Row>
        </Content>
    );
};

export default DashboardContent;
