import styled from "styled-components";

export const Description = styled.p`
    font-size: 1.2rem;
    color: #4E4E4E;
    text-align: center;

    @media (max-width: 600px){
        font-size: 0.8rem;
    }
`

export const List = styled.p`
    font-size: 1.2rem;
    color: #4E4E4E;
    margin-top: 1rem;
    @media (max-width: 600px){
        font-size: 0.8rem;
    }
`

export const Button = styled.button`
    color: #42A4EF;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`