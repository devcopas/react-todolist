/** @jsxImportSource @emotion/react */
// import { jsx } from "@emotion/react";

// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./button.module.css";

import * as styles from "./button.styles";

const Button = ({ text, onClick, color }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "blue" && "main-blue-color",
  //   color === "red" && "main-red-color"
  // ].join(" ");

  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlueColor]: color === "blue",
  //   [styles.mainRedColor]: color === "red"
  // });

  return (
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>

    <button css={styles.button({ color })} onClick={onClick}>
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
