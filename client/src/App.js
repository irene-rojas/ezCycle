import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from '../src/components/Page';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/listing" component={Page} />
      </Switch>
    </div>
  </Router>
);

export default App;