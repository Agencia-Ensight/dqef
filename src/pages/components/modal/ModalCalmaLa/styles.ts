import styled from "styled-components";

export const Description = styled.p`
    font-size: 1.2rem;
    color: #4E4E4E;
    text-align: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;

`

export const Image = styled.img`
    display: block;
    width: 250px;
    height: auto;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 980px){
        width: 150px;
    }

    @media (max-width: 600px){
        width: 188px;
        height: 166px;
    }
`