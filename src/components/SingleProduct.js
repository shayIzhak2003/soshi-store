// SingleProduct.js
import React from 'react';
import { useProductContext } from '../context/ProductContext';

const SingleProduct = (props) => {
  const { product } = props;
  const { addToCart } = useProductContext();

  return (
    <div className="product" key={product.id}>
      <img
        src={product.image}
        alt={product.title}
        title={product.title}
      />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-price">
          <span className="price">{product.price}</span>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
