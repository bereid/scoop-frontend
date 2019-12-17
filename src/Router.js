import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './Layout.js';

const AppRouter = () => (
    <Router>
        <Layout >
          <Switch>
          <Route exact path="/expenses"/>
          <Route exact path="/incomes"/>
          <Route exact path="/" />
        </Switch>
        </Layout>
    </Router>
);

export default AppRouter;