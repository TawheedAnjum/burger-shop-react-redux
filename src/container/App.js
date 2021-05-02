import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BurgerBuilder from './home/BurgerBuilder';
import Layout from '../component/layout/Layout';
import CheckoutBuilder from './chekout/CheckoutBuilder';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/chechout" component={CheckoutBuilder} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
