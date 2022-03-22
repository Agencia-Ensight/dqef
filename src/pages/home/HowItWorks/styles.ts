import styled, {css} from "styled-components";
import { ISelected } from "./typings";


export const Wrapper = styled.div`
    margin: 0 5%;
    padding-top: 8rem;
`

export const Container = styled.div`
    width: 100%;
    border: 5px solid #42A4EF;
    box-shadow: 0px 0px 50px rgba(198, 198, 198, 0.25);
    border-radius: 50px;
    padding: 3rem 4rem 4rem 3rem;
    display: flex;
    align-items: center;
    gap: 0px 40px;
    
    @media (max-width: 900px){
        flex-direction: column;
    }
`

export const Image = styled.img`
    width: 40%;
    height: auto;

    @media (max-width: 900px){
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    @media (max-width: 600px){
        width: 100%;
    }
`

export const Info = styled.div`

`

export const Title = styled.h1`
    background: linear-gradient(180deg, #56CCF2 0%, #2F80ED 100%);
    color: white;
    font-family: 'Knewave', sans-serif;
    color: var(--white-text);
    font-size: 2.4rem;
    width: fit-content;
    padding: 0.1rem 1rem;

    @media (max-width: 600px){
        font-size: 1.5rem;
        white-space: nowrap;
    }
`

export const SubTitle = styled.h2`
    font-weight: 600;
    color: var(--muted-text);
    font-size: 1.2rem;
    margin-bottom: 1.3rem;
`

export const Description = styled.p`
    font-size: 1.2rem;
    margin-top: 1.6rem;
`

export const Highlight = styled.span`
    color: var(--blue);


`

export const Button = styled.button<ISelected>`
    color: #969696;
    margin: 0 0.5rem;


  
    ${({selected}) => selected === true && css`
    color: var(--blue);
    `}
`