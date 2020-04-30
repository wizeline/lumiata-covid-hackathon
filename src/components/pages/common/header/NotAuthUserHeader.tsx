import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import Brand from './Brand';
import Auth from './Auth';
import './Header.css'



const Header = () => {
    return (
        <div className='header-body'>
            <img className='logo' src={require('./Logo.png')} alt=""/>
            <Button className='login-btn'>Login</Button>
            <Button className='' type='primary'>Register</Button>
        </div>
    )
}

const NotAuthUserHeader = () => {
    return (
        <Header/>
    );
};

export default NotAuthUserHeader;
