import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import 'bulma/css/bulma.css';

// TODO: Not working...
require('dotenv').config();

ReactDOM.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>,
    document.getElementById('root'),
);
