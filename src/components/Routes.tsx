import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './Profile';
import Browse from './pages/browse/Browse';
import Job from './pages/job/Job';
import Success from './Success';
import NotFound from './NotFound';

const Routes = () => {
    useEffect(() => {
        const iconsScript = document.createElement('script');
        iconsScript.src = 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js';
        document.getElementsByTagName('head')[0].appendChild(iconsScript);
    });

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/job" component={Job} />
                <Route exact path="/service" component={Job} />
                <Route exact path="/success" component={Success} />
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
};

export default Routes;
