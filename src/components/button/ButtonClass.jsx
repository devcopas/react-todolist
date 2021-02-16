import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

const StyledButton = styled.button`
  background-color: unset;
  color: ${(props) => props.textColor};
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 1.5;
  font-family: "Bungee", sans-serif;
  padding: ${(props) => props.padding};
  cursor: pointer;
  border: unset;
  outline: unset;
  &:hover {
    color: ${(props) => props.textColorHover};
    /* transform: scale(1.1, 1.1); */
  }
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, theme } = this.props;
    const {
      color: { primary, secondary }
    } = theme;

    let textColor;
    let textColorHover;
    let padding;

    switch (color) {
      case "blue":
        textColor = primary.base;
        textColorHover = primary.darker;
        padding = "6px 16px";
        break;
      case "red":
        textColor = secondary.base;
        textColorHover = secondary.darker;
        padding = "6px 16px";
        break;
      default:
        textColor = primary.base;
        textColorHover = primary.darker;
        padding = "6px 16px";
    }

    return (
      <StyledButton
        textColor={textColor}
        textColorHover={textColorHover}
        padding={padding}
        onClick={onClick}
      >
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "blue"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["blue", "red"])
  };
}

export default withTheme(Button);
