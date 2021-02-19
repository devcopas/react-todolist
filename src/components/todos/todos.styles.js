import { css } from "@emotion/react";

// export const todos = () =>
//   css`
//     display: flex;
//     flex-direction: column;
//     min-height: 500px;
//   `;

export const todosPlaceholder = (theme) =>
  css`
    color: ${theme.color.light.base};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1rem 10rem;
  `;

export const highlightText = (theme) =>
  css`
    font-family: "Bungee", sans-serif;
    color: ${theme.color.primary.base};
  `;

export const seeAboutPage = (theme) =>
  css`
    font-family: "Open Sans", sans-serif;
    color: ${theme.color.light.base};
    font-size: 1.6rem;
    text-align: center;

    > span > :first-of-type {
      letter-spacing: 1px;
      font-weight: 700;
      color: red;
      text-decoration: none;
      color: ${theme.color.primary.base};

      &:hover {
        color: ${theme.color.primary.darker};
        text-decoration: underline;
      }
    }
  `;
