/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";

const Item = ({ children, flex, padding, align }) => {
  const itemStyles = css`
    flex: ${flex};
    text-align: ${align};
    padding: ${padding};
  `;

  return jsx(
    "div",
    { css: itemStyles, flex: flex, align: align, padding: padding },
    children
  );
};

Item.defaultProps = {
  align: "left",
  padding: "unset"
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Item;
