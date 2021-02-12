import { css } from "@emotion/react";

export const add = () =>
  css`
    padding: 16px;
  `;

export const addForm = () =>
  css`
    display: flex;
    align-items: flex-end;
  `;

export const addInput = (theme) =>
  css`
    background: unset;
    border: unset;
    padding: 0 64px;
    margin-right: 10px;
    flex: 1;
    outline: unset;
    border-bottom: 1px solid ${theme.color.primary.setLightness(20)};
    color: ${theme.color.light.darker};
    font-family: "Open Sans", sans-serif;
    letter-spacing: 1px;
    font-size: 20px;
    text-align: center;
  `;

export const addBtn = (theme) =>
  css`
    font-size: 1.4rem;
    padding: 0 16px;
    border-radius: 4px;
    color: ${theme.color.primary.setLightness(15)};
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    font-family: "Bungee", sans-serif;
    background: ${theme.color.primary.base};
    border: unset;
    outline: unset;

    &:hover {
      background-color: ${theme.color.primary.darker};
    }
  `;
