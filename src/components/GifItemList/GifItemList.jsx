import React from 'react';

import './GifItemList.css';
import GifItem from '../GifItem/index';

const GifItemList = (props) => (
    <div className='gif-item-list'>
        {
            props.items.map((item) => (
                <GifItem
                    key={item.id}
                    url={item.images.downsized.url}
                />)
            )
        }
    </div>
);

export default GifItemList;
