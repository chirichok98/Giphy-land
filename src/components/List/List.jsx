import React, { PureComponent } from 'react';

import './List.css';

class List extends PureComponent {
  render() {
    return (
      <div className='wrapper'>
        {this.props.items.map((item) => (
          <div key={item.id}>
            <img src={item.images.downsized.url} />
          </div>)
        )}
      </div>
    );
  }
}

export default List;
