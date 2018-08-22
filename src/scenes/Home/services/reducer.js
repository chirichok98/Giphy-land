import actionTypes from './actionTypes';

const defaultPaging = {
	limit: 15,
	offset: 0,
};

const defaultState = {
	items: [],
	error: null,
	loading: false,
	paging: defaultPaging,
	query: '',
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_ITEMS:
			return {
				...state,
				loading: true,
			};
		case actionTypes.LOAD_ITEMS_SUCCESS:
			return {
				...state,
				items: action.payload.items,
				loading: false,
				error: null,
				paging: action.payload.paging,
			};
		case actionTypes.LOAD_ITEMS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		case actionTypes.CANCEL_LOAD_ITEMS:
			return {
				...state,
				loading: false,
			};
		case actionTypes.CHANGE_QUERY:
			return {
				...state,
				query: action.payload.query,
			};
		case actionTypes.RESET_PAGING:
			return {
				...state,
				paging: defaultPaging,
			};
		case actionTypes.LOAD_MORE_ITEMS:
			return {
				...state,
				// items: state.items.concat(action.payload.items),
				// loading: false,
				// error: null,
				// paging: action.payload.paging,
			};
		default:
			return state;
	}
}

export default reducer;