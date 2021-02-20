import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

class Item extends React.Component {
  render() {
    const { children, flex, align, padding } = this.props;

    return (
      <StyledDiv flex={flex} align={align} padding={padding}>
        {children}
      </StyledDiv>
    );
  }

  static defaultProps = {
    align: "left",
    padding: "unset"
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    align: PropTypes.oneOf(["left", "center", "right", "justify"]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
}

const StyledDiv = styled.div`
  flex: ${(props) => props.flex};
  text-align: ${(props) => props.align};
  padding: ${(props) => props.padding};
`;

export default Item;
