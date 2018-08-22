import React from 'react';
import PropTypes from 'prop-types';

import './GifItemList.css';
import GifItem from '../GifItem/index';

const GifItemList = ({ items }) => (
	<div className='gif-item-list'>
		{
			items.map((item) => (
				<GifItem
					key={item.id}
					url={item.images.downsized.url}
				/>)
			)
		}
	</div>
);

GifItemList.propTypes = {
	items: PropTypes.array.isRequired,
}

export default GifItemList;
