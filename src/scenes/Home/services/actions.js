import actionTypes from './actionTypes';

const loadItems = (paging) => ({
	type: actionTypes.LOAD_ITEMS,
	payload: { paging },
});


const loadItemsSuccess = (items, paging) => ({
	type: actionTypes.LOAD_ITEMS_SUCCESS,
	payload: { items, paging },
});

const loadItemsError = (error) => ({
	type: actionTypes.LOAD_ITEMS_ERROR,
	payload: { error },
})

const cancelLoadItem = () => ({ type: actionTypes.CANCEL_LOAD_ITEMS });

const changeQuery = (query) => ({
	type: actionTypes.CHANGE_QUERY,
	payload: { query },
});

const resetPaging = () => ({ type: actionTypes.RESET_PAGING });

const loadMoreItems = () => ({
	type: actionTypes.LOAD_MORE_ITEMS,
});

export default {
	loadItems,
	loadItemsSuccess,
	loadItemsError,
	cancelLoadItem,
	changeQuery,
	resetPaging,
	loadMoreItems,
}