import React, { PureComponent } from 'react';

import './Search.css';

class Search extends PureComponent {
  state = {
    query: '',
  }

  searchChange = (event) => {
    event.preventDefault();
    this.props.searchChange({ query: this.state.query });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <form className="search-container" onSubmit={this.searchChange}>
        <input
          className="search-box"
          placeholder="Search all the GIFs"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <input
          className="search-button"
          type="submit"
          value="Find"
        />
      </form>
    )
  }
}

export default Search;
