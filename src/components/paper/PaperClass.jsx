import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

const StyledPaper = styled.div`
  height: 800px;
  width: 600px;
  background-color: ${(props) => props.theme.color.dark.base};
  padding: 32px;
`;

const StyledFrame = styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.setLightness(20)};
  height: 100%;
`;

class Paper extends React.Component {
  render() {
    return (
      <StyledPaper>
        <StyledFrame>{this.props.children}</StyledFrame>
      </StyledPaper>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
}

export default withTheme(Paper);
