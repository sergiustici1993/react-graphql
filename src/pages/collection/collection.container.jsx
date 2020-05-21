import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
query getCategoriesByTitle($title: String!) {
  getCategoriesByTitle(title: $title) {
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
}`;

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{title: match.params.collectionId}}
  >
    {({loading, data: {getCategoriesByTitle}}) => {
      if (loading) return <Spinner/>;
      return <CollectionPage collection={getCategoriesByTitle}/>;
    }}
  </Query>
);

export default CollectionPageContainer;
