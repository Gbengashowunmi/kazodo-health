import React from "react";
import { IoIosArrowForward, IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import HeadFoot from "../../components/headfoot/HeadFoot";
import OrderCard from "../../components/orderCard/OrderCard";
import "./shoppingcart.scss";

export default function ShoppingCart() {
  return (
    <HeadFoot>
      <div className="product_detail shopping_cart">
        <heading className="product_details_heading">
          <span>
            <p>Home</p>
            <IoIosArrowForward className="arrow" />

            <p>Secondary category</p>
            <IoIosArrowForward className="arrow" />

            <p>Primary category</p>
            <IoIosArrowForward className="arrow" />

            <p>category</p>
          </span>
          <h1>Shopping Cart</h1>
        </heading>
        <div className="cont_shopping">
          <Link to="/">
            <button>
              {" "}
              <IoMdArrowRoundBack />
              Continue shopping
            </button>
          </Link>
        </div>

        <article>
          <section className="order_wrapper">
            <heading className="order_head">
              <ul>
                <li>Items Details</li>
                <li>Quantity</li>
                <li>Item Price</li>
                <li>Action</li>
              </ul>
            </heading>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </section>
          {/* order summary  */}
          <section className="order_summary">
            <heading className="summary_head">
              <h5>Order Summary</h5>
              <h5>4 Items</h5>
            </heading>
            {/* delivery  */}
            <section className="delivery">
              <p>Delivery Charges</p>
              <p>
                Add your delivery address at checkout to see delivery charges
              </p>
            </section>
            {/* sub total  */}
            <section className="sub_total">
              <p>Subtotal</p>
              <h4>Amount</h4>
            </section>
            {/* Total  */}
            <section className="total">
              <p>Total</p>
              <h4>Amount</h4>
            </section>

            <button> Continue to Checkout</button>
          </section>
        </article>
      </div>
    </HeadFoot>
  );
}
