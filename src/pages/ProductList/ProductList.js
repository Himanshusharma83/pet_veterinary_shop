import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';
import NewCollectionTypes from '../NewCollection/NewCollectionTypes';

const ProductList = ({ products }) => {
  return (
    <>
        <NewCollectionTypes />
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductList;
