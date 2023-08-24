import React from 'react';
import './ProductCard.css';
import NewCollectionTypes from '../NewCollection/NewCollectionTypes';

const ProductCard = ({ product }) => {
  return (
    <>
    
    <div className="card-wrapper product-card-wrapper underline-links-hover">
      <div className="card card--standard card--media">
        <div className="card__inner color-background-2 gradient ratio">
          <div className="card__media">
            <div className="media media--transparent media--hover-effect">
            <img
                src={product.imageUrl} 
                alt={product.name}
                className="motion-reduce"
                width="2000"
                height="2000"
              />
            </div>
          </div>
          <div className="card__content">
            <div className="card__information">
              <h3 className="card__heading">
                <a
                  href="/products/huft-crimson-thrill-lounger-dog-bed-red-blue"
                  className="full-unstyled-link"
                  aria-labelledby="StandardCardNoMediaLink-template--14594474934334__product-grid-7172082204734 NoMediaStandardBadge-template--14594474934334__product-grid-7172082204734"
                >
                  {product.name}
                </a>
              </h3>
              <span className="ClsLTYWidget">
                <b>Price</b> {product.price}
              </span>
            </div>
            <div className="card__badge bottom left">
              {/* icons */}
            </div>
            <div className="card_new">
              <div className="CL_bestseller CL_newproduct"></div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default ProductCard;




