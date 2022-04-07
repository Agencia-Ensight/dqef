import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    min-width: 300px;
    height: 491px;
    background: white;
    border-radius: 15px;
    padding: 27px 19px 37px 41px;
    /* box-shadow: 0px 32px 32px rgba(31, 47, 70, 0.06); */

    @media (max-width: 425px){
        width: 280px;
        min-width: 280px;
    }

    @media (max-width: 425px){
        width: 300px;
        min-width: 300px;
    }

   

    img{
        width: 240px;
        height: 222px;
    }

`

export const Title = styled.h1`
    font-size: 24px;
    color: #1C1C28;
    font-weight: 600;

`

export const SubTitle = styled.h2`
    font-size: 18px;
    color: #00A5FF;
    font-weight: 500;
`

export const Description = styled.p`
    font-size: 16px;
    color: #868B9D;
    margin-top: 20px;
`