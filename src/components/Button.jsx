import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color }) => {
  const classNames = [
    "header-btn",
    color === "blue" && "main-blue-color",
    color === "red" && "main-red-color"
  ].join(" ");

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "blue"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["blue", "red"])
};

export default Button;
