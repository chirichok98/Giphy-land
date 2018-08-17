import React from 'react';

import './GifItem.css';

const GifItem = (props) => (
    <div className='gif-item'>
        <img className='gif-item-img' src={props.url} />
    </div>
);

export default GifItem;