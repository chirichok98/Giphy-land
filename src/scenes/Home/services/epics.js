import { combineEpics } from 'redux-observable';
import { of, Observable } from 'rxjs';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import actions from './actions';
import actionTypes from './actionTypes';

export const loadItems = (action$, store, { giphy }) =>
	action$.ofType(actionTypes.LOAD_ITEMS)
		.pipe(
			switchMap(action => {
				console.log(store);
				const query = store.value.home.query;
				const paging = action.payload.paging;
				let request = query ?
					giphy.search({ q: query, ...paging }) : giphy.popular({ ...paging });

				return new Observable(request).pipe(
					map(({ response }) => actions.loadItemsSuccess({ items: response.data, paging })),
					catchError(error => of(actions.loadItemsError(error))),
					takeUntil(action$.ofType(actionTypes.CANCEL_LOAD_ITEMS))
				);
			})
		);


export default combineEpics(
	loadItems
);