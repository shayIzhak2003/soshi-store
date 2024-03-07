// Product.js
import React from 'react';
import { useProductContext } from '../context/ProductContext';
import SingleProduct from './SingleProduct';

const Product = () => {
  const { products } = useProductContext();

  return (
    <div className="products">
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
