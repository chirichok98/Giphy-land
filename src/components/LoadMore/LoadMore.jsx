import React from 'react';

import './LoadMore.css';

const LoadMore = ({ loadMore }) => (<input
  className="load-btn"
  onClick={loadMore}
  type="button"
  value="Load More" />
);

export default LoadMore;