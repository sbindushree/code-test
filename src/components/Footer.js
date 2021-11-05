import React from "react";
import logo from "../assets/logo-footer.svg";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer-conatiner">
        <ul className="footer-txt">
          <li>
            {" "}
            © 2021 <span>Dotcentric</span> Code Test - All
          </li>
          <li> rights reserved </li>
          <li> Call 01234 432 123</li>
        </ul>

        <img src={logo} className="footer-app-logo" alt="code test logo" />
      </div>
    </>
  );
}

export default Footer;
