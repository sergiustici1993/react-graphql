import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import ProductDetailPage from './product.components';
import Spinner from '../../components/spinner/spinner.component';

const GET_PRODUCT_BY_ID = gql`
query product($id: Int!) {
  product(id: $id) {
    id
    price
    title
    imageUrl
    body
    categories {
      name
    }
  }
}`;

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const ProductPageContainer = ({ match }) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {addItemToCart => (
      <Query
        query={GET_PRODUCT_BY_ID}
        variables={{id: match.params.productId}}
      >
        {({loading, data: {product}}) => {
          if (loading) return <Spinner/>;
          return <ProductDetailPage
            product={product}
            addItem={item => addItemToCart({ variables: { item } })}
          />;
        }}
      </Query>
    )}
  </Mutation>
);

export default ProductPageContainer;
