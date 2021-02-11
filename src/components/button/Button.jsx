//---- jika menggunakan css in js ----//
// jika menggunakan classic js runtime //
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// jika menggunakan classic js runtime //

import { useTheme } from "@emotion/react";

// jika menggunakan automatic js runtime //
/** (@)jsxImportSource @emotion/react */
// jika menggunakan automatic js runtime //

import PropTypes from "prop-types";
import * as styles from "./button.styles";

//---- jika menggunakan css module ----//
// import React from "react";
// import cx from "classnames";
// import PropTypes from "prop-types";
// import styles from "./button.module.css";
//---- ----------------------------- ----//

const Button = ({ text, onClick, color }) => {
  //---- jika menggunakan css module ----//
  // const classNames = [
  //   "header-btn",
  //   color === "blue" && "main-blue-color",
  //   color === "red" && "main-red-color"
  // ].join(" ");

  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlueColor]: color === "blue",
  //   [styles.mainRedColor]: color === "red"
  // });
  //---- jika menggunakan css module ----//

  const theme = useTheme();

  return (
    //---- jika menggunakan css module ----//
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>
    //---- jika menggunakan css module ----//

    //---- jika menggunakan css in js ----//
    <button css={styles.button({ color, theme })} onClick={onClick}>
      {text}
    </button>
    //---- jika menggunakan css in js ----//
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
