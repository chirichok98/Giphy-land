import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './components/Header/index';
import Navigator from './components/Navigator/index';
import Home from './scenes/Home/index';
import Random from './scenes/Random/index';
import rootReducer from './services/reducer';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        <Navigator />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/random" component={Random} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
