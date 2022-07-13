import styled, { css } from "styled-components";

import { Props } from "./typings";

export const Wrapper = styled.button<Props>`
  font-family: "Knewave", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  cursor: pointer;

  ${({ variant }) =>
    variant === "PRIMARY" &&
    css`
      background: var(--blue-linear);
      color: white;
      border: none;
    `}

  ${({ variant }) =>
    variant === "SECONDARY" &&
    css`
      background: transparent;
      color: black;
      border: 2px solid #42a4ef;
    `}

    ${({ variant }) =>
    variant === "TERITIARY" &&
    css`
      background: black;
      color: white;
    `}

    ${({ size }) =>
    size === "sm" &&
    css`
      padding: 8px 25px;
      font-size: 1rem;
    `}

    ${({ size }) =>
    size === "md" &&
    css`
      padding: 10px 30px;
      font-size: 1.5rem;
    `}

    ${({ size }) =>
    size === "lg" &&
    css`
      padding: 5px 100px;
      font-size: 1.8rem;
    `}
`;
