import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Search.css';

class Search extends PureComponent {

	state = {
		query: '',
	};

	searchChange = (e) => {
		e.preventDefault();
		this.props.searchChange({ query: this.state.query });
	}

	render = () => (
		<form className="search-container" onSubmit={this.searchChange}>
			<input
				className="search-box"
				placeholder="Search all the GIFs"
				onChange={(e) => this.state.query = e.target.value}
			/>
			<input
				className="search-button"
				type="submit"
				value="Find"
			/>
		</form>
	);
}

Search.propTypes = {
	searchChange: PropTypes.func.isRequired
}

export default Search;
