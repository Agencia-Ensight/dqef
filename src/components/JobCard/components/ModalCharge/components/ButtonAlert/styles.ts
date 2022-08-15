import styled, { css } from "styled-components";

import { IButton } from "./typings";

export const Wrapper = styled.button<IButton>`
  width: 80%;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 1rem;
  padding: 10px 30px;
  border-radius: 99px;
  font-weight: bold;
  ${({ variant }) =>
    variant === "SUCCESS" &&
    css`
      border: 3px solid #6fda73;
    `}
  ${({ variant }) =>
    variant === "WARNING" &&
    css`
      border: 3px solid #e6de22;
    `}
    ${({ variant }) =>
    variant === "ERROR" &&
    css`
      border: 3px solid #ed3561;
    `}
`;
