import React, { useState, useEffect } from "react";
import "./CardsContainer.scss";
import Card from "./Card";
import Quote from "../assets/quote-icon.svg";
import axios from "axios";

function CardsContainer() {
  const url = "https://api.mocki.io/v2/561baaaa";

  const [services, setServices] = useState([]);

  //api call and storing data in services
  const getServices = () => {
    axios
      .get(url)
      .then((response) => {
        const allServices = response.data.services;
        setServices(allServices);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => getServices(), []);

  return (
    <>
      <div className="cards-container">
        <section className="cards-section">
          <h1 className="cards-section-title">We Do Really Awesome Things</h1>
          <p className="cards-section-desc">
            Lorem ipsum dolor sit amet, <span>link</span> consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div className="cards-wrapper">
            {/* looping the services data through card component */}
            {services &&
              services.map((service) => {
                return (
                  <Card
                    key={service.id}
                    name={service.name}
                    image={service.image}
                    desc={service.description}
                  ></Card>
                );
              })}
          </div>
        </section>
        <div className="quote-section">
          <img
            className="quote-icon"
            src={Quote}
            alt="quotes in orange color"
          />
          <article className="quote-container">
            <p className="quote-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="quote-author">Roy Barber - Dotcentric</span>
          </article>
        </div>
      </div>
    </>
  );
}

export default CardsContainer;
