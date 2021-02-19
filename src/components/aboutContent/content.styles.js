import { css } from "@emotion/react";

export const header = (theme) =>
  css`
    color: ${theme.color.primary.base};
    font-size: 2rem;
    font-family: "Bungee", sans-serif;
    letter-spacing: 1px;
  `;

export const subHeader = (theme) =>
  css`
    color: ${theme.color.primary.setLightness(40)};
    font-size: 1.5rem;
    letter-spacing: 0.5px;
  `;

export const paragraph = (theme) =>
  css`
    color: ${theme.color.light.darker};
    font-size: 1.6rem;
    text-align: justify;
    font-weight: 300;
    line-height: 2;
    text-indent: 4rem;
  `;

export const backToHome = (theme) => css`
  color: ${theme.color.light.darker};
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  font-weight: 500;

  > :first-of-type {
    color: ${theme.color.primary.base};
    text-decoration: unset;

    &:hover {
      color: ${theme.color.primary.darker};
      text-decoration: underline;
    }
  }
`;
