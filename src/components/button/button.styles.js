import { css } from "@emotion/react";

export const button = ({ color }) => {
  let textColor;
  let textColorHover;

  switch (color) {
    case "blue":
      textColor = "#61dafb";
      textColorHover = "hsl(193, 95%, 50%);";
      break;
    case "red":
      textColor = "#fb6194";
      textColorHover = "hsl(340, 95%, 63%)";
      break;
    default:
      textColor = "#61dafb";
      textColorHover = "hsl(193, 95%, 50%);";
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
