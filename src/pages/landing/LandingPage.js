import React from "react";
import Card1 from "../../components/card1/Card1";
import Card2 from "../../components/card2/Card2";
import Card3 from "../../components/card3/Card3";
import Carousel from "../../components/carousel/Carousel";
import HeadFoot from "../../components/headfoot/HeadFoot";
import "./landing.scss";

export default function LandingPage() {
  return (
    <HeadFoot>
      <div className="landingpage">
        <main className="hero">
          <div className="carousel"><Carousel /></div>
          {/* left section/ aside  */}
          <div className="aside">
            <div className="image">
              <img
                src="/images/kazodo-products/Access.jpg_H1VrdBXyn.jpg"
                alt="aside"
              />
            </div>
            <div className="image">
              <img
                src="/images/kazodo-products/IntelBox.jpg_r1pUyyAAs.jpg"
                alt="aside"
              />
            </div>
            <div className="image">
              <img
                src="/images/kazodo-products/pow.jpg_SyyYvzXy3.jpg"
                alt="aside"
              />
            </div>
            <div className="image">
              <img
                src="/images/kazodo-products/Power.jpg_rkeYDfQkh.jpg"
                alt="aside"
              />
            </div>
          </div>
        </main>
        {/* //today's deal section */}
        <section className="todays_deal">
          <header>
            <h3>Today's Deals</h3>
          </header>
          <div className="todays_deal_container">
            <Card1
              image="./images/kazodo-products/203255_1655290232 (1).jpg"
              description="Airtel 4G Pocket Wifi"
              price="8,500"
              oldPrice="20,000"
            />
            <Card1
              image="./images/kazodo-products/209757_1668032128.jpg"
              description="Atouch KT3 Kids Android Tablet"
              price="35,999"
              oldPrice="40,000"
            />
            <Card1
              image="./images/kazodo-products/1_1521561074.jpg"
              description="Johnnie Walker Red Label - 70cl"
              price="5,400"
              oldPrice="6,080"
            />
            <Card1
              image="./images/kazodo-products/171191_1654084279.jpg"
              description="Orijin Bitters- 20cl x 6pieces"
              price="2,350"
              oldPrice="2,600"
            />
            <Card1
              image="./images/kazodo-products/161794_1665870261.jpg"
              description='Nokia X20 -6.67"-8GB RAM - 128GB'
              price="146,000"
              oldPrice="159,020"
            />
            <Card1
              image="./images/kazodo-products/118566_1638268432.jpg"
              description='Vivo Y21- 6.51"-4gb+ 64gb- 5000m'
              price="108,000"
              oldPrice="123,200"
            />
          </div>
        </section>
        {/* sponsored product section  */}
        <section className="sponsored_product">
          <h2>Sponsored Products</h2>
          <hr />
          <aside className="sponsored_product_wrapper">
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
          </aside>
        </section>
        {/* recommended product section  */}
        <section className="recommended">
          <header>
            <span>
              <h3>Recommended for you</h3>
            </span>
          </header>
          <div className="todays_deal_container">
            <Card1
              image="./images/kazodo-products/_1631194335.jpg"
              description="Airtel 4G Pocket Wifi"
              price="8,500"
              oldPrice="20,000"
            />
            <Card1
              image="./images/kazodo-products/118566_1622119196.jpg"
              description="Airtel 4G Pocket Wifi"
              price="8,500"
              oldPrice="20,000"
            />
            <Card1
              image="./images/kazodo-products/203255_1655290232 (1).jpg"
              description="Airtel 4G Pocket Wifi"
              price="8,500"
              oldPrice="20,000"
            />
            <Card1
              image="./images/kazodo-products/187109_1617970775.jpg"
              description="Airtel 4G Pocket Wifi"
              price="8,500"
              oldPrice="20,000"
            />
            <Card1
              image="./images/kazodo-products/67343_1674455022.jpg"
              description="Airtel 4G Pocket Wifi"
              price="8,500"
              oldPrice="20,000"
            />
            <Card1
              image="./images/kazodo-products/tvs.jpg_S1Ew1z9zi.jpg"
              description="Airtel 4G Pocket Wifi"
              price="8,500"
              oldPrice="20,000"
            />
          </div>
        </section>
        <section className="banner1"></section>

        <section className="main_card">
          <Card3
            image="./images/kazodo-products/tvs.jpg_S1Ew1z9zi.jpg"
            description="Airtel 4G Pocket Wifi"
            price="8,500"
            oldPrice="20,000"
            discount="25"
          />
          <Card3
            image="./images/kazodo-products/fitness.jpg_BJFwyf5Mo.jpg"
            description="Airtel 4G Pocket Wifi"
            price="8,500"
            oldPrice="20,000"
            discount="25"
          />
          <Card3
            image="./images/kazodo-products/kids.jpg_B1HPkz9Mo.jpg"
            description="Airtel 4G Pocket Wifi"
            price="8,500"
            oldPrice="20,000"
            discount="25"
          />
          <Card3
            image="./images/kazodo-products/furniture.jpg_Sk7P1z9Ms.jpg"
            description="Airtel 4G Pocket Wifi"
            price="8,500"
            oldPrice="20,000"
            discount="25"
          />
        </section>
      </div>
    </HeadFoot>
  );
}
