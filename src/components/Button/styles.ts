import styled, {css} from "styled-components";

import {Props} from './typings'

export const Wrapper = styled.button<Props>`
    padding: 8px 15px 8px 15px;
    border-radius: 99px;
    font-weight: bold;
    font-size: 12px;



    ${({variant}) => variant === "primary" && css`
        background: var(--blue-linear);
        color: white;
        border: none;
    `}
    ${({variant}) => variant === "secondary" && css`
        background: transparent;
        color: black;
        border: 1px solid #42A4EF;
    `}
    ${({variant}) => variant === "tertiary" && css`
        background: var(--danger-linear);
        color: white;
        border: none;
    `}
    ${({variant}) => variant === "quaternary" && css`
        background: var(--warning-linear);
        color: white;
        border: none;
    `}
    ${({variant}) => variant === "quinternary" && css`
        background: black;
        color: white;
        border: none;
    `}
`;
