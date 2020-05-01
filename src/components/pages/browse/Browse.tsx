import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from '../common/header/AuthUserHeader';
import SearchBars from './SearchBars';
import ListMap from './ListMap';
import {Footer} from '../common/footer/Footer';

const Browse = () => {
    return (
        <div>
            <Layout>
                <Header />
                <SearchBars />
                <ListMap />
                <Footer />
            </Layout>
        </div>
    );
};

export default Browse;
