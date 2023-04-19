import React from "react";
import HeadFoot from "../../components/headfoot/HeadFoot";
import "./sell.scss"
export default function Sell() {
  return (
    <HeadFoot>
      <div className="product_detail sell_wrapper">
        <heading className="product_details_heading">
          <span>
            <p>home</p>
            <p>Sell on Kazodo</p>
          </span>
          <h1>Sell On Kazodo</h1>
        </heading>
        <div className="hero_sell">
          <img src="/images/sell-on-konga.png" alt="hero" />
          <aside className="hero_desc">
            <h1>Grow your business online</h1>
            <p>
              Reach millions of buyers in every state in Nigeria easily, get
              your store on Konga today!
            </p>
            <button>Register Now</button>
          </aside>
        </div>
        <div className="why_sell_container">
          <h2>Why Sell on Kazodo?</h2>
          <section className="why_sell_content">
            <div className="why_sell">
              <img src="/images/calculator.png" alt="why_sell" />
              <h5>Earn More Money</h5>
              <p>
                Konga is one of the largest websites in Nigeria. Sell to over 50
                million buyers across every state in Nigeria
              </p>
            </div>
            <div className="why_sell">
              <img src="/images/safe.png" alt="why_sell" />
              <h5>Earn More Money</h5>
              <p>
                Konga is one of the largest websites in Nigeria. Sell to over 50
                million buyers across every state in Nigeria
              </p>
            </div>
            <div className="why_sell">
              <img src="/images/megaphone.png" alt="why_sell" />
              <h5>Earn More Money</h5>
              <p>
                Konga is one of the largest websites in Nigeria. Sell to over 50
                million buyers across every state in Nigeria
              </p>
            </div>
            <div className="why_sell">
              <img src="/images/online-payment.png" alt="why_sell" />
              <h5>Earn More Money</h5>
              <p>
                Konga is one of the largest websites in Nigeria. Sell to over 50
                million buyers across every state in Nigeria
              </p>
            </div>
            <div className="why_sell">
              <img src="/images/online-shop.png" alt="why_sell" />
              <h5>Earn More Money</h5>
              <p>
                Konga is one of the largest websites in Nigeria. Sell to over 50
                million buyers across every state in Nigeria
              </p>
            </div>
            <div className="why_sell">
              <img src="/images/question.png" alt="why_sell" />
              <h5>Earn More Money</h5>
              <p>
                Konga is one of the largest websites in Nigeria. Sell to over 50
                million buyers across every state in Nigeria
              </p>
            </div>
          </section>
        </div>
        <section className="earn_without_hassle">
          <div className="text">
            <h2>Grow your business online</h2>
            <button>Register Now</button>
          </div>
          <img src="/images/electronics.png" alt="hero" />
        </section>
      </div>
    </HeadFoot>
  );
}
