import React from 'react';
import PropTypes from 'prop-types';

import './LoadMore.css';

const LoadMore = ({ loadMore }) => (
  <div className='container'>
    <input
      className="load-btn"
      onClick={loadMore}
      type="button"
      value="Load More"
    />
  </div>
);

LoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired
}

export default LoadMore;