import { css } from "@emotion/react";

export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = (theme) => {
  return css`
    width: 60%;
    text-align: center;
    color: ${theme.color.light.base};
    font-size: 3.6rem;
    font-family: "Bungee", sans-serif;
    text-transform: lowercase;
    letter-spacing: 2px;
  `;
};
