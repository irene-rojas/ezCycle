import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from '../src/components/Page';
import Carte from './components/Carte';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/listing" component={Page} />
        <Route exact path="/listing:zipcode" component={Page} /> 
        {/* Might need to point the listing zipcodes to component filter */}
      </Switch>
    </div>
  </Router>
);


// class App extends Component {
  
//   render() { //part of Component
//     return (
//       <Page />
//     );
//   }
// }

export default App;