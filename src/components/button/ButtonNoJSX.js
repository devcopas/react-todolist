/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import * as styles from "./button.styles";

const Button = ({ text, color, onClick }) => {
  const theme = useTheme();

  return jsx(
    "button",
    {
      css: styles.button({ color, theme }),
      onClick: onClick
    },
    text
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
