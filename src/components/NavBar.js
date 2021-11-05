import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import menu_close from "../assets/icon-close.svg";
import { Button } from "./Button";
import "./NavBar.scss";

function NavBar() {
  const [menuClick, setMenuClick] = useState(false);
  const [button, setButton] = useState(true);
  //handling menu icon and scroll for mobile 
  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    document.body.classList.toggle("lock-scroll");
   
  };
  const closeMobileMenu = () => {
    setMenuClick(false);
    document.body.classList.remove("lock-scroll");
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className={menuClick ? "navbar-logo logo-close" : "navbar-logo"}
          >
            <img src={logo} className="app-logo" alt="code test logo" />
          </Link>
          <div
            className={
              menuClick ? "menu-icon menu-close" : "menu-icon menu-bar"
            }
            onClick={handleMenuClick}
          >
            <img src={menuClick ? menu_close : menu} alt="menu icon" />
          </div>
          <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-you"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About You
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonColor="btn--orange" linkTo="/contact">
              Contact
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
