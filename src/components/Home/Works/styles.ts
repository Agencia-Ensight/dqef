import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 5%;
    padding-top: 6rem;
`

export const Title = styled.h1`
    font-weight: 500;
    color: var(--black-text);
    font-size: 2.2rem;
    margin: 0.5rem 0rem;
`

export const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--blue);
`

export const Description = styled.p`
    font-weight: 400;
    font-size: 1rem;   
    color: var(--content-text);
`



export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const InfoDiv = styled.div``

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 60px 50px;
    padding-top: 3rem;

    @media (max-width: 700px){
        flex-wrap: nowrap;
        overflow-y: scroll;
        padding-bottom: 2rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;

    a{
        text-decoration: none;
    }

`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border: 2px solid #42a4ef;
    border-radius: 999px;

    @media (max-width: 768px){
        display: none;
    }
`



export const SearchInput = styled.input`
    width: 100%;
    font-size: 18px;
    border: none;
    background: transparent;
    height: 100%;

    &:focus{
        outline: 0;
    }
`

export const SearchDiv = styled.div`


`