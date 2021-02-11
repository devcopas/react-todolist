import { css } from "@emotion/react";

export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = () => {
  return css`
    width: 60%;
    text-align: center;
    color: #fff;
    font-size: 3.6rem;
    font-family: "Bungee", sans-serif;
    text-transform: lowercase;
    letter-spacing: 2px;
  `;
};
