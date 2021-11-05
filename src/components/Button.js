import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const COLORS = ["btn--blue", "btn--orange"];

const SIZES = ["btn--small", "btn--large"];

const LINKS = ["/", "/about-us", "/about-you", "/portfolio", "/contact"];


//generic button component with custom color size and oter properties 
export const Button = ({
  children,
  type,
  onClick,
  buttonColor,
  buttonSize,
  linkTo,
}) => {
  const checkButtonColor = COLORS.includes(buttonColor)
    ? buttonColor
    : COLORS[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkLink = LINKS.includes(linkTo) ? linkTo : LINKS[0];

  return (
    <Link to={checkLink}>
      <button
        className={`btn ${checkButtonColor} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
