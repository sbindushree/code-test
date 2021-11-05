import React from "react";
import "./HomeContainer.scss";
import browser_image from "../assets/browser-image.png";
import { Button } from "./Button";

function HomeContainer() {
  return (
    <>
      <div className="home-container">
        <section className="home-section">
          <h1 className="home-title"> We Do Awesome Things</h1>
          <p className="home-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img className="home-img" src={browser_image} alt="tropical summer" />
        </section>
        <div className="home-footer-bar">
          <p className="home-footer-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit!
          </p>
          <Button
            className="mobile-btn"
            buttonColor="btn--blue"
            linkTo="/contact"
          >
            Call Now
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
