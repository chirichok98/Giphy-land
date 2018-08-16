import React, { PureComponent } from 'react';

import './Search.css';

class Search extends PureComponent {
  
  searchChange = (e) => {
    e.preventDefault();
    this.props.searchChange({ query: e.target.value });
  }

  render = () =>
    (<form className="search-container" onSubmit={this.searchChange}>
      <input
        className="search-box"
        placeholder="Search all the GIFs"
        onChange={this.handleInputChange}
      />
      <input
        className="search-button"
        type="submit"
        value="Find"
      />
    </form>);
}

export default Search;
