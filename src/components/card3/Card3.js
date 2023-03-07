import React from "react";
import "./card3.scss";
export default function Card3({ image, description, price, oldPrice, discount }) {
  return (
    <div className="card3_wrapper">
      <div className="discount_flag">
        <p>{discount}% off</p>
      </div>

      <div className="image">
        <img src={image} alt="product_name" />
      </div>
      <aside className="description">
        <p className="name">{`${description}`.substring(0, 27)}...</p>
        <div className="price">
          <h2>₦{price}</h2>
          <p>
            <s>₦{oldPrice}</s>
          </p>
        </div>
        <p className="saved">
          sold by <span>Name of vendor</span>
        </p>
      </aside>
      <div className="reviews">*******(No reviews yet)</div>
      <button>Add To Cart</button>
    </div>
  );
}
