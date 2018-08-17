import React from 'react';
import PropTypes from 'prop-types';

import './GifItem.css';

const GifItem = ({ url }) => (
    <div className='gif-item'>
        <img className='gif-item-img' src={url} alt='' />
    </div>
);

GifItem.propTypes = {
    url: PropTypes.string.isRequired
}


export default GifItem;