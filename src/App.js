import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './services/store';
import { Provider } from 'react-redux';

import Header from './components/Header/index';
import Navigator from './components/Navigator/index';
import HomeScene from './scenes/Home/index';
import Random from './scenes/Random/index';

const history = createHistory();
const store = createStore(history);

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Fragment>
				<Header />
				<Navigator />

				<Switch>
					<Route exact path="/" component={HomeScene} />
					<Route path="/random" component={Random} />
				</Switch>
			</Fragment>
		</ConnectedRouter>
	</Provider>
);

export default App;
