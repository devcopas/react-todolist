/** @jsxRuntime classic */
/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx, useTheme } from "@emotion/react";
import * as styles from "./paper.styles";

const Paper = ({ children }) => {
  const theme = useTheme();

  return jsx(
    "div",
    { css: styles.paper(theme) },
    jsx("div", { css: styles.frame(theme) }, children)
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
