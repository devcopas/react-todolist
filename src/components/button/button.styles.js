import { css } from "@emotion/react";

export const button = ({ color, theme }) => {
  let textColor;
  let textColorHover;

  const {
    color: { primary, darker }
  } = theme;

  switch (color) {
    case "blue":
      textColor = primary.blue;
      textColorHover = darker.blue;
      break;
    case "red":
      textColor = primary.red;
      textColorHover = darker.red;
      break;
    default:
      textColor = primary.blue;
      textColorHover = darker.blue;
  }

  return css`
    width: 20%;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: ${textColor};
    font-family: "Bungee", sans-serif;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    &:hover {
      color: ${textColorHover};
      transform: scale(1.1, 1.1);
    }
  `;
};
