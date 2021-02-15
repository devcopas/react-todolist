import { css } from "@emotion/react";

export const button = ({ color, theme }) => {
  let textColor;
  let textColorHover;
  let padding;

  const {
    color: { primary, secondary }
  } = theme;

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

  return css`
    /* width: 20%; */
    background-color: unset;
    color: ${textColor};
    font-size: 1.8rem;
    text-transform: uppercase;
    line-height: 1.5;
    font-family: "Bungee", sans-serif;
    padding: ${padding};
    cursor: pointer;
    border: unset;
    outline: unset;
    &:hover {
      color: ${textColorHover};
      /* transform: scale(1.1, 1.1); */
    }
  `;
};
