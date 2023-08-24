import React from 'react';
import './NewCollectionTypes.css';

const NewCollectionTypes = () => {
  return (
    <div className="NewCollectionTypes">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/beds_21.png?v=1636177398" alt="Beds" />
              </p>
              <p className="type_flt_title">Beds</p>
            </a>
          </div>
          <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/mats_21.png?v=1636177397" alt="Personalised Beds" />
              </p>
              <p className="type_flt_title">Mats</p>
            </a>
          </div>
          <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/personalised_beds_35d484b0-f54b-44fc-9af8-a8279f5a8f49.png?v=1612368205" alt="Personalised Beds" />
              </p>
              <p className="type_flt_title">Personalised Beds</p>
            </a>
          </div>
           <div className="swiper-slide NCL_6">
            <a href="#">
              <p className="type_flt_img">
                <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/blankets_21.png?v=1636177398" alt="Personalised Beds" />
              </p>
              <p className="type_flt_title">Blankets</p>
            </a>
          </div>
         
        </div>
        <div className="swiper-button-prev swiper-button-disabled" tabIndex="-1" role="button" aria-label="Previous slide" aria-disabled="true"></div>
        <div className="swiper-button-next swiper-button-disabled" tabIndex="-1" role="button" aria-label="Next slide" aria-disabled="true"></div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  );
};

export default NewCollectionTypes;
