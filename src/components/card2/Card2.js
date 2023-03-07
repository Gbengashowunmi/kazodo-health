import React from "react";
import "./card2.scss";
export default function Card2({
  image,
  description,
  price,
  oldPrice,
  discount,
}) {
  return (
    <div className="card2_wrapper">
      <div className="discount_flag">
        <p>{discount}% off</p>
      </div>

      <div className="image">
        <img src={image} alt="product_name" />
      </div>
      <aside className="description">
        <p className="name">{`${description}`.substring(0, 27)}...</p>
        <div className="price">
          <h3>{price}</h3>
          <p>
            <s>{oldPrice}</s>
          </p>
        </div>
        <p className="saved">You saved this amount</p>
      </aside>
    </div>
  );
}
