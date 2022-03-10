import styled, { css } from "styled-components";

import { CardProps } from './typings'

export const Wrapper = styled.div`
    position: relative;
    min-width: 280px;

    height: auto;
    background: var(--white-background);
    border-radius: 15px;
    box-shadow: 0px 32px 32px -48px rgba(31, 47, 70, 0.06);

`

export const RocketImage = styled.img`
    width: 70px;
    height: auto;
    position: absolute;
    top: -35px;
    left: -30px;

`

export const CourseContainer = styled.div<CardProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    height: 100px; 
    background: linear-gradient(60.59deg, #3081ED 2.35%, #55CBF2 98.26%);

   

    ${({course}) => course === 'DIREITO' && css`
        background: linear-gradient(60.59deg, #3081ED 2.35%, #55CBF2 98.26%);
    `}
    ${({course}) => course === 'ENG-CIVIL' && css`
        background: linear-gradient(60.59deg, #F83A00 2.35%, #FE8A00 98.26%);   
    `}
    ${({course}) => course === 'PEDAGOGIA' && css`
        background: linear-gradient(60.59deg, #BC1F76 2.35%, #F652C3 98.26%);
    `}
    ${({course}) => course === 'NUTRICAO' && css`
        background: linear-gradient(60.59deg, #01B400 2.35%, #00FE00 98.26%);
    `}
    ${({course}) => course === 'MEDICINA' && css`
        background: linear-gradient(60.59deg, #98291E 2.35%, #EC223A 98.26%);
    `}
    ${({course}) => course === 'ARQUITETURA' && css`
        background: linear-gradient(60.59deg, #6A3096 2.35%, #9E42FB 98.26%);
    `}
    ${({course}) => course === 'ECONOMIA' && css`
        background: linear-gradient(60.59deg, #EAC401 2.35%, #FAF400 98.26%);
    `}
    ${({course}) => course === 'ADM' && css`
        background: linear-gradient(60.59deg, #1E1E1E 2.35%, #414141 98.26%);
    `}
    ${({course}) => course === 'PSICOLOGIA' && css`
        background: linear-gradient(60.59deg, #F0A0AB 2.35%, #FEDBDF 98.26%);
    `}
`

export const Course = styled.h1`
    font-size: 2.5rem;
    font-family: 'Knewave', sans-serif;
    color: var(--white-text);
`

export const Title = styled.h2`
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const MainContainer = styled.div`
    padding: 15px 26px 29px 22px;
`

export const InformationContainer = styled.div`
    margin-top: 0.8rem;
`

export const Subtitle = styled.h3`
    font-size: 0.8rem;
    color: #8B91A7;
`

export const Description = styled.p`
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.2rem;
`

export const Price = styled.p`
    color: #2F80ED;
    font-size: 1.2rem;
    margin-top: 0.2rem;
    font-weight: 600;
`

export const Date = styled.p<CardProps>`
    margin-top: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;


 
`