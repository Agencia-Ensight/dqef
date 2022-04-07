import styled, {css} from "styled-components";
import { ISelected } from "./typings";


export const Wrapper = styled.div`
    margin: 0 5%;
    padding-top: 8rem;
    padding-bottom: 3rem;

    span{
        color: #42A4EF;
        font-weight: 500;
    }
`

export const Container = styled.div`
  
    
    
`





export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
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
    text-align: center;

`

export const Description = styled.p`
    font-size: 1.2rem;
    margin-top: 1.6rem;
    text-align: center;

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
export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 77px;
    overflow-y: scroll;
    justify-content: center;

    @media (max-width: 500px){
        justify-content: flex-start;
    }
    

    @media (max-width: 320px){
        flex-wrap: wrap;
    }
`





