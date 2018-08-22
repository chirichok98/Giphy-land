import React, { Component } from 'react';
import { connect } from "react-redux";

import actions from './services/actions';
import Search from './components/Search/index';
import LoadMore from './components/LoadMore/index';
import GifItemList from '../../components/GifItemList/index';

class HomeScene extends Component {

	componentDidMount = () => {
		this.props.loadItems(this.props.paging);
	};
	
	componentWillUnmount() {
		this.props.cancelLoadItems();
	}

	render() {
		return (
			<div>
				<Search searchChange={this.props.onQueryChange} />
				<GifItemList items={this.props.items} />
				<LoadMore loadMore={this.props.loadMore} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { items, loading, error, paging, query } = state.home;

	return {
		items,
		loading,
		error,
		paging,
		query,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadItems: (paging) => dispatch(actions.loadItems(paging)),
		cancelLoadItems: () => dispatch(actions.cancelLoadItem()),
		loadMore: () => dispatch(actions.loadMoreItems()),
		onQueryChange: ({ query }) => dispatch(actions.changeQuery(query))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);
