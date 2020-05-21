import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(item => (
      <CollectionPreview key={item.id} title={item.title} items={item.products.items} />
    ))}
  </div>
);

export default CollectionsOverview;
