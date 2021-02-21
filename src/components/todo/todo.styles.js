import { css } from "@emotion/react";

export const todo = (theme) => {
  return css`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    max-height: 50px;
    font-family: "Open Sans", sans-serif;
    font-size: 1.6rem;
    cursor: pointer;
    border-bottom: 1px solid ${theme.color.primary.setLightness(20, 0.2)};

    &:hover {
      background-color: ${theme.color.dark.setLightness(20)};
    }
  `;
};

export const todoText = ({ theme, isCompleted }) => {
  return css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
