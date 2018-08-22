import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import randomReducer from '../scenes/Random/services/reducer';
import homeReducer from '../scenes/Home/services/reducer';
import randomEpic from '../scenes/Random/services/epics';
import homeEpic from '../scenes/Home/services/epics';
import giphy from './giphy';

const createAppStore = (history) => {
	const routerHistoryMiddleware = routerMiddleware(history);

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const rootEpic = combineEpics(
		randomEpic,
		homeEpic,
	);

	const epicMiddleware = createEpicMiddleware({
		dependencies: {
			giphy,
		},
	});

	const rootReducer = combineReducers({
		router: routerReducer,
		random: randomReducer,
		home: homeReducer,
	});

	const store = createStore(
		rootReducer,

		composeEnhancers(
			applyMiddleware(
				routerHistoryMiddleware,
				epicMiddleware,
			)
		)
	);

	epicMiddleware.run(rootEpic);

	return store;
};

export default createAppStore;