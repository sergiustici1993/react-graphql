import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { title: name, price, imageUrl, id } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Link className='custom-button' to={`/product/${ id }`}>
        VIEW PRODUCT
      </Link>
    </div>
  );
};

export default CollectionItem;
