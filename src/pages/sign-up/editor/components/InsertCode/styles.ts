import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 1rem;


    @media (max-width: 768px){
        height: auto;
    }
`

export const ResendCodeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg{
        cursor: pointer;
    }
`