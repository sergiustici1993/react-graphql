import React from 'react';

import { default as CollectionItem } from '../../components/collection-item/collection-item.container';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const { title, products } = collection;
  const { items } = products;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
