import React from 'react';
import NotAuthUserHeader from '../common/header/NotAuthUserHeader';
import {Footer} from '../common/footer/Footer';
import DashboardContent from './DashboardContent';
import {Layout} from '../../Layout';

const Dashboard = () => {
    return (
        <Layout>
            <DashboardContent />
        </Layout>
    );
};

export default Dashboard;
