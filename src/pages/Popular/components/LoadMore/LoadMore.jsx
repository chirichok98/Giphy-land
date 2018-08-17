import React from 'react';

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

export default LoadMore;