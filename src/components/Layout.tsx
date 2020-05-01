import React from 'react';
import {Footer} from './pages/common/footer/Footer';
import {Navbar} from './Navbar';

export const Layout: React.FC<{}> = ({children}) => {
    return (
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};
