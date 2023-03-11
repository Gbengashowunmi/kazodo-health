import React from "react";
import "./ordercard.scss";
export default function OrderCard() {
  return (
    <div className="order_card_container">
      {/* item picture and name  */}
      <div className="item">
        <div className="images">
          <img
            src="/images/kazodo-products/118566_1638268432.jpg"
            alt="item_name"
          />
        </div>
        <section className="item_name">
          <p>
            <strong>Item Name</strong>
          </p>
        </section>
      </div>
      {/* quantity increase/decrease */}
      <div className="qty">
        <div className="qty_wrapper">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
      {/* item price  */}
      <div className="item_price">
        <h4>₦1,500</h4>
        <p>₦1,500 x 1 item</p>
      </div>
      {/* Action  */}
      <div className="action">
        <p>Remove Item</p>
        <p>Save for later</p>
      </div>
    </div>
  );
}
