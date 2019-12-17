import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './Layout.js';

const AppRouter = () => (
    <Router>
        <Layout >
          <Switch>
          <Route exact path="/expense"/>
          <Route exact path="/income"/>
          <Route path="/" />
        </Switch>
        </Layout>
    </Router>
);

export default AppRouter;