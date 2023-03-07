import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { HiMenuAlt3 } from "react-icons/hi";

import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import "./headfoot.scss";
export default function HeadFoot({ children }) {
  return (
    <div className="head_foot_wrapper">
      <header className="header">
        <div className="nav_header1">
          <div className="logo">
            <h3>KAZODO</h3>
          </div>
          <div className="seller">
            <p>become a seller</p>
          </div>
          <div className="search">
            <input
              className="search_input"
              placeholder="search for products, brand and categories"></input>
          </div>
          <div className="login">
            <h4>LOGIN/SIGNUP</h4>
          </div>
          <div className="cart">MY cart</div>
        </div>

        <div className="nav_header2">
          <aside className="nav_header2_aside">
            <p>Categories</p>
            <div className="navigate">
              <Navigation />
            </div>
          </aside>
          <aside className="nav_header2_aside">
            <p>utilities</p>
            <div className="navigate">
              <Navigation />
            </div>
          </aside>
          <aside className="nav_header2_aside">
            <p>disposables</p>
            <div className="navigate">
              <Navigation />
            </div>
          </aside>
          <aside className="nav_header2_aside">
            <p>disposables</p>
            <div className="navigate">
              <Navigation />
            </div>
          </aside>
          <aside className="nav_header2_aside">
            <p>disposables</p>
            <div className="navigate">
              <Navigation />
            </div>
          </aside>
          <aside className="nav_header2_aside">
            <p>disposables</p>
            <div className="navigate">
              <Navigation />
            </div>
          </aside>
          <aside className="nav_header2_aside">
            <p>disposables</p>
            <div className="navigate">
              <Navigation />
            </div>
          </aside>
        </div>
      </header>
      {children}
      {/* <footer>
        <div
          className="about"
         >
          <h3>MEDPAU</h3>
          <p>
            At MedPau, we believe smart innovations in healthcare is key to
            advancement of a society which translates to better economy and
            quality of life. Professionalism.
          </p>
          <ul>
            <Link to="//www.facebook.com/Medpau1" target="_blank">
              <li>
                <FaFacebookF />
              </li>
            </Link>
            <a href="mailto:Info@medpau.net">
              <li>
                <FaGooglePlusG />
              </li>
            </a>
            <Link to="//linkedin.com/company/medpau/" target="_blank">
              <li>
                <FaLinkedinIn />
              </li>
            </Link>
            <Link
              to="//twitter.com/medpauintl?s=11&t=zBroa9mFl_fitJFK1HbUcQ"
              target="_blank">
              <li>
                <FaTwitter />
              </li>
            </Link>
          </ul>
        </div>
        <div
          className="courses">
          <div className="head">
            <h3>Medpau Impact Projects </h3>
            <hr />
          </div>
          <ul>
            <NavLink
              to="//medpauimpacts.com/womens-network/"
              target="blank"
              rel="noopener noreferrer">
              {" "}
              <li>
                <FaChevronRight />
                Medpau Women Network
              </li>
            </NavLink>
            <NavLink
              to="//medpauimpacts.com/mgtp/"
              target="blank"
              rel="noopener noreferrer">
              <li>
                <FaChevronRight />
                Medpau Graduate Training Program
              </li>
            </NavLink>
            <NavLink
              to="//medpauimpacts.com/wkd/"
              target="blank"
              rel="noopener noreferrer">
              {" "}
              <li>
                <FaChevronRight />
                World Kidney Day
              </li>
            </NavLink>
            <NavLink to="/event">
              <li>
                <FaChevronRight />
                Events - International Women's Day
              </li>
            </NavLink>
            <NavLink to="/faq">
              <li>
                <FaChevronRight />
                FAQ
              </li>
            </NavLink>
          </ul>
        </div>
        <div
          className="recent-posts">
          <div className="head">
            <h3>Recent Posts</h3>
            <hr />
          </div>
        </div>
        <div
          className="contact-us">
          <div className="head">
            <h3>Contact Us</h3>
            <hr />
          </div>
          <ul>
            <li>
              <FaPhone />{" "}
              <a href="tel:+2349085323596">
                <span>+234908 532 3596</span>{" "}
              </a>
            </li>
            <a href="tel:+233256885072">
              <li>
                {" "}
                <FaPhone /> <span>+23325 688 5072</span>{" "}
              </li>
            </a>

            <a href="mailto:Info@medpau.net">
              <li>
                <MdEmail /> <span>Info@medpau.net</span>
              </li>
            </a>
            <li>
              <MdLocationPin />
              <span>3, Tunde Gafar Close, Off Adeniyi Jones, Ikeja, Lagos</span>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
}
