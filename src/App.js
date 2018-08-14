import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from './components/Header/index';
import Navigator from './components/Navigator/index';
import Popular from './pages/Popular/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigator />

        <Router>
          <Route exact path="/" component={Popular} />
          {/* <Route path="/random" component={Random} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
