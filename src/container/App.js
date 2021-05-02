import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BurgerBuilder from './home/BurgerBuilder';
import Layout from '../component/layout/Layout';
import CheckoutBuilder from './chekout/CheckoutBuilder';
import Order from "./order/Order";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/chechout" component={CheckoutBuilder} />
          <Route path="/order" component={Order} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
