import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import NotAuthUserHeader from '../common/header/NotAuthUserHeader';
import BasicFooter from '../common/footer/Footer';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
    return (
        <div>
            <Layout>
                <NotAuthUserHeader/>
                <DashboardContent/>
                <BasicFooter />
            </Layout>
        </div>
    );
};

export default Dashboard;
