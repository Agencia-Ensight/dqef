import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
    color: black;

    @media (max-width: 768px){
        display: none;
    }
`

export const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 768px){
        justify-content: center;
    }

`