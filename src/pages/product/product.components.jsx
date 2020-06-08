import React from 'react';
import { Link } from 'react-router-dom';
import stripHtml from "string-strip-html";

import CustomButton from "../../components/custom-button/custom-button.component";
import './product.styles.scss';

const ProductDetailPage = ({ product, addItem }) => {
  const { title, price, imageUrl, body, categories } = product;
  const { name } = categories[0];
  const description = body ? body : '';
  return (
    <div className='product'>
      <h2><Link className='category' to={`/shop/${ name }`}>{name}</Link></h2>
      <img src={imageUrl} alt='item' />
      <h1>{title}</h1>
      <p className='price'>Price: ${price}</p>
      {
        stripHtml(description)
      }
      <p className='button'>
        <CustomButton onClick={() => addItem(product)} inverted>
          Add to cart
        </CustomButton>
      </p>
    </div>

)};

export default ProductDetailPage;
