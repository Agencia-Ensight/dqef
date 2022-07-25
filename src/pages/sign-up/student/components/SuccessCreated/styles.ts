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


export const Image = styled.img`
    width: 12rem;
    height: 10rem;

   
`;


export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
`