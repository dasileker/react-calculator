import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Quote from './Quote';
import NavBar from './Nav';
import Home from './Home';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <div className="calculator">
      <NavBar />
    </div>
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route path="/app" component={App} exact />
      <Route path="/quote" component={Quote} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
