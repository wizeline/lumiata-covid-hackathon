import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from '../common/header/AuthUserHeader';
import SearchBar from '../common/searchbar/SearchBar';
import JobDetails from './JobDetails';
import CommunityReviews from '../common/reviews/CommunityReviews';
import Footer from '../common/footer/Footer';

const Job = () => {
    return (
        <div>
            <Layout>
                <Header />
                <SearchBar />
                <JobDetails />
                <CommunityReviews />
                <Footer />
            </Layout>
        </div>
    );
};

export default Job;
