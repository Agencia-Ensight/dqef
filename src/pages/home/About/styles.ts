import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 5%;
    margin-top: 4rem;
    margin-bottom: 2rem;
`

export const Container = styled.div`
    display: flex;
    gap: 70px;
    align-items: center;

    @media (max-width: 900px){
        flex-direction: column;
    }
`

export const Image = styled.img`
    width: 80%;
    height: auto;
`

export const Info = styled.div`

`

export const Title = styled.h1`
    font-size: 3rem;
    color: rgba(33, 33, 33, 1);
`

export const Highlight = styled.span`
   background: linear-gradient(180deg, #56CCF2 0%, #2F80ED 100%);
    color: white;
    color: var(--white-text);
    width: fit-content;
    padding: 0.1rem 1rem;
`

export const Description = styled.p`
    color: #434343;
    font-size: 1.2rem;
    margin-top: 1.8rem;
    font-weight: 400;
`