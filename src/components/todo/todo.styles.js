import { css } from "@emotion/react";

export const todo = (theme) => {
  return css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 34px;
    margin: 16px 0 0;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 1px solid ${theme.color.primary.setLightness(20, 0.2)};
  `;
};

export const todoText = ({ theme, isCompleted }) => {
  return css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${theme.color.light.base};
    letter-spacing: 1px;

    ${isCompleted &&
    css`
      text-decoration: line-through;
      font-style: italic;
      color: ${theme.color.light.setLightness(40)};
    `}
  `;
};
