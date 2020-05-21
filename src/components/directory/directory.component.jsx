import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import MenuItem from '../menu-item/menu-item.component';
import Spinner from '../spinner/spinner.component';

import './directory.styles.scss';

const GET_COLLECTIONS = gql`
query getCategories {
  categories(sort: {field: "weight", direction: "ASC"}) {
    items {
      id
      imageUrl
      linkUrl
      title
      size
    }
    total
  }
}
`;

const Directory =() => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      return (
        <div className='directory-menu'>
          {data.categories.items.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      );
    }}
  </Query>
);

export default Directory;
