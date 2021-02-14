import { css } from "@emotion/react";

export const button = ({ color, theme }) => {
  let textColor;
  let textColorHover;

  const {
    color: { primary, secondary }
  } = theme;

  switch (color) {
    case "blue":
      textColor = primary.base;
      textColorHover = primary.darker;
      break;
    case "red":
      textColor = secondary.base;
      textColorHover = secondary.darker;
      break;
    default:
      textColor = primary.base;
      textColorHover = primary.darker;
  }

  return css`
    /* width: 20%; */
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
