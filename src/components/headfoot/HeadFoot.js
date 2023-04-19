import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { BsCart4 } from "react-icons/bs";

import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import "./headfoot.scss";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../../features/auth/authSlice";
import TemporaryDrawer from "../TemporaryDrawer";

export default function HeadFoot({ children }) {
  // redux usage
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // menu from material ui
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // logout user
  const logoutUser = () => {
    handleClose();
    console.log("logged out");
    dispatch(logout());
  };
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  //nav bar handling
  const [showShopCategory, setShowShopCategory] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log("nav-bar")
    setIsOpen(!isOpen);
  };
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".nav_header1");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className="head_foot_wrapper">
      <header className="header ">
        <div
          onClick={handleToggle}
          className={`${isOpen ? "overlay" : "show"}`}></div>
        <div className="nav_header1">
          <div className="logo">
            <div className="nav_bar">
              <TemporaryDrawer />
            </div>
            {/* <BiMenuAltLeft className="nav_bar" onClick={handleToggle} /> */}
            <Link to="/">
              <h3>KAZODO HEALTH</h3>
            </Link>
          </div>
          <Link to="/sell-on-kazodo">
            <div className="seller">
              <p>become a seller</p>
            </div>
          </Link>
          <div className="search">
            <input
              className="search_input"
              placeholder="search for products, brand and categories"></input>
          </div>
          <div>
            {user ? (
              <div
                className="login"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                <h4>{user.firstName}</h4>
              </div>
            ) : (
              <Link to="/login">
                <div className="login">
                  <h4>LOGIN/SIGNUP</h4>
                </div>
              </Link>
            )}

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <Link to="/cart">
                <MenuItem onClick={handleClose}>My Cart</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>Saved Items</MenuItem>
              <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
          </div>
          <Link to={user ? "/cart" : "/login"}>
            <button className="cart">
              <BsCart4 className="icon" />
              <p>My cart</p> 0
            </button>
          </Link>
          <div className="search2">
            <input
              className="search_input"
              placeholder="search for products, brand and categories"></input>
          </div>
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
      <footer>
        <div className="about">
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
        <div className="courses">
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
        <div className="recent-posts">
          <div className="head">
            <h3>Recent Posts</h3>
            <hr />
          </div>
        </div>
        <div className="contact-us">
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
      </footer>
    </div>
  );
}
