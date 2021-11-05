import React from "react";
import cardImage from "../assets/img/mango.svg";
import "./Card.scss";

const Card = ({ name, image, desc }) => {
  return (
    <>
      <div className="card-component">
        <img
          className="card-img"
          src={"src" + image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = cardImage;
          }}
          alt={name}
        />
        <h1 className="card-title">{name}</h1>
        <p className="card-desc">{desc}</p>
      </div>
    </>
  );
};

export default Card;
