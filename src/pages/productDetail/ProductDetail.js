import React from "react";
import Card2 from "../../components/card2/Card2";
import HeadFoot from "../../components/headfoot/HeadFoot";
import "./productDetail.scss";

export default function ProductDetail() {
  return (
    <HeadFoot>
      <div className="product_detail">
        {/* heading  */}
        <heading className="product_details_heading">
          <span>
            <p>home</p>
            <p>Secondary category</p>
            <p>Primary category</p>
            <p>category</p>
          </span>
          <h1>Name of product</h1>
        </heading>
        {/* hero section  */}
        <div className="product_hero">
          <aside className="image">
            <img src="" alt="product" />
          </aside>
          <aside className="product_details">
            <div className="brief">
              <h2>Product name and short description</h2>
              <p>
                Product code: <strong>number</strong>
              </p>
              <p>
                Brand: <strong>Brand name</strong>
              </p>
            </div>
            <span className="price_section">
              <h2>Price</h2> <s>old price</s>{" "}
              <strong>you saved this amount</strong>
            </span>
            {/* color size quantity  */}
            <section className="color_size_qty">
              <p>
                Color: <strong>Green</strong>
              </p>
              <p>
                Size: <strong>Green</strong>
              </p>
              <p>
                Quantity: <strong>Green</strong>
              </p>
              <p>
                For bulk purchase, call : <strong>tel number</strong>
              </p>
            </section>
            <div className="make_purchase">
              <button>Buy Now</button>
            </div>
            {/* social media icons  */}
            <p>Share with friends</p>

            <h4>social media icons</h4>
          </aside>
        </div>

        {/* seller */}
        <section className="seller">
          <img src="" alt="seller_logo" />
          <span>
            <p>
              Sold by <strong>Name of Vendor</strong>
            </p>
          </span>
        </section>
        {/* description shipping overview tabs */}
        <section className="overview">
          <ul>
            <li>Overview</li>
            <li>Description</li>
            <li>Shipping</li>
            <li>Warranty</li>
            <li>Return Policy</li>
            <li>Reviews</li>
          </ul>
        </section>

        {/* similar products  */}

        <section className="similar_products">
          <h3>Similar Items you may like</h3>
          <div className="items">
            <div>
              <Card2
                image="./images/kazodo-products/190496_1626794216.jpg"
                description="Airtel 4G Pocket Wifi"
                price="8,500"
                oldPrice="20,000"
              />
            </div>
            <div>
              <Card2
                image="./images/kazodo-products/201124_1675467474.jpg"
                description="Airtel 4G Pocket Wifi"
                price="8,500"
                oldPrice="20,000"
              />
            </div>
            <div>
              <Card2
                image="./images/kazodo-products/211454_1672532842.jpg"
                description="Airtel 4G Pocket Wifi"
                price="8,500"
                oldPrice="20,000"
              />
            </div>
            <div>
              <Card2
                image="./images/kazodo-products/203020_1674629573.jpg"
                description="Airtel 4G Pocket Wifi"
                price="8,500"
                oldPrice="20,000"
              />
            </div>
            <div>
              <Card2
                image="./images/kazodo-products/186186_1653915602.jpg"
                description="Airtel 4G Pocket Wifi"
                price="8,500"
                oldPrice="20,000"
              />
            </div>
            <div>
              <Card2
                image="./images/kazodo-products/192711_1651671034.jpg"
                description="Airtel 4G Pocket Wifi"
                price="8,500"
                oldPrice="20,000"
              />
            </div>
          </div>
        </section>
      </div>
    </HeadFoot>
  );
}
