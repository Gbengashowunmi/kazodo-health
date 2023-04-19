import React from 'react'
import { Link } from 'react-router-dom';
import "./card1.scss"
export default function Card1({image, description, price, oldPrice}) {

  

  return (
    <Link to="/productdetail">
      <div className="card1_wrapper">
        <div className="image">
          <img src={image} alt="product_name" />
        </div>
        <aside className="description">
          <p className="name">
            {`${description}`.substring(0, 27)}
            ...
          </p>
          <div className="price">
            <h3>₦{price} </h3>
            <p>
              <s>₦{oldPrice}</s>
            </p>
          </div>
          <p className="saved">You saved ₦</p>
        </aside>
      </div>
    </Link>
  );
}
