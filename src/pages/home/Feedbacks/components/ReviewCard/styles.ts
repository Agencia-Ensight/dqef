import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 480px;
    width: 480px;
    height: auto;
    border: 1px solid #42A4EF;
    border-radius: 15px;
    padding: 24px 55px 24px 55px;
    text-align: center;
`

export const ProfileImage = styled.img`
    width: 60px;
    border-radius: 9999px;
`

export const ProfileName = styled.h1`
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 0.6rem;
`

export const RatingContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.6rem;

`

export const Description = styled.p`
    font-weight: 500;
    font-size: 1.2rem;
    color: var( --content-text);
    margin-top: 0.6rem;


`