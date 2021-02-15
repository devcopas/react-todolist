import { css } from "@emotion/react";

export const paper = (theme) => {
  return css`
    height: 800px;
    width: 600px;
    background-color: ${theme.color.dark.base};
    padding: 32px;
  `;
};

export const frame = (theme) => {
  return css`
    border: 1px solid ${theme.color.primary.setLightness(20)};
    height: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
  `;
};
