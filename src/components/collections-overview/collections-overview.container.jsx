import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  query categories {
  categories {
    items {
      id
      title
      products {
        items {
          id
          title
          price
          imageUrl
        }
      }
    }
  }
}
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      return <CollectionsOverview collections={data.categories.items} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
