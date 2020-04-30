import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SearchBars from './SearchBars';
import Selector from './Selector';
import CommunityReviews from '../common/reviews/CommunityReviews';

const { Content } = Layout;

const DashboardContent = () => {
    return (
        <Content>
            <SearchBars />
            <Selector />
            <CommunityReviews />
        </Content>
    );
};

export default DashboardContent;
