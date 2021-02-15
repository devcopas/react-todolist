/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const Item = ({ children, flex, align, padding }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
        padding: ${padding};
      `}
    >
      {children}
    </div>
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
