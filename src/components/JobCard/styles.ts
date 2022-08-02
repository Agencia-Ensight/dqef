import styled, { css } from "styled-components";

import { CourseContainerProps, CardProps } from "./typings";

export const Wrapper = styled.div``;

export const Container = styled.div`
  position: relative;
  min-width: 280px;
  width: 280px;
  height: auto;
  background: white;
  border-radius: 15px;

  box-shadow: 0px 32px 32px rgba(31, 47, 70, 0.06);

  @media (max-width: 425px) {
    /* min-width: 100%; */
    min-width: 240px;
  }
`;

export const RocketImage = styled.img`
  width: 70px;
  height: auto;
  position: absolute;
  top: -35px;
  left: -30px;
`;

export const CourseContainer = styled.div<CourseContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 100px;
  background: linear-gradient(60.59deg, #3081ed 2.35%, #55cbf2 98.26%);

  background: ${(props) => {
    switch (props.course) {
      case "DIREITO":
        return "linear-gradient(60.59deg, #3081ED 2.35%, #55CBF2 98.26%);";
    }
    switch (props.course) {
      case "ENG-CIVIL":
        return "linear-gradient(60.59deg, #F83A00 2.35%, #FE8A00 98.26%);";
    }
    switch (props.course) {
      case "PEDAGOGIA":
        return "linear-gradient(60.59deg, #BC1F76 2.35%, #F652C3 98.26%);";
    }
    switch (props.course) {
      case "NUTRICAO":
        return "linear-gradient(60.59deg, #01B400 2.35%, #00FE00 98.26%)";
    }
    switch (props.course) {
      case "MEDICINA":
        return "linear-gradient(60.59deg, #98291E 2.35%, #EC223A 98.26%)";
    }
    switch (props.course) {
      case "ARQUITETURA":
        return "linear-gradient(60.59deg, #6A3096 2.35%, #9E42FB 98.26%);";
    }
    switch (props.course) {
      case "ECONOMIA":
        return "linear-gradient(60.59deg, #EAC401 2.35%, #FAF400 98.26%)";
    }
    switch (props.course) {
      case "ADM":
        return "linear-gradient(60.59deg, #1E1E1E 2.35%, #414141 98.26%)";
    }
    switch (props.course) {
      case "PSICOLOGIA":
        return "linear-gradient(60.59deg, #F0A0AB 2.35%, #FEDBDF 98.26%);";
    }
  }};

  @media (max-width: 425px) {
    height: 70px;
  }
`;

export const Course = styled.h1`
  font-size: 1.3rem;
  font-family: "Knewave", sans-serif;
  color: var(--white-text);

  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.0rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;

export const MainContainer = styled.div`
  padding: 15px 26px 29px 22px;

  @media (max-width: 425px) {
    padding: 5%;
  }
`;

export const InformationContainer = styled.div`
  margin-top: 0.8rem;
`;

export const Subtitle = styled.h3`
  font-size: 0.8rem;
  color: #8b91a7;

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin-top: 0.2rem;
  font-weight: bold;
`;

export const Price = styled.p`
  color: #2f80ed;
  font-size: 1.2rem;
  margin-top: 0.2rem;
  font-weight: 600;
`;

export const Date = styled.p<CardProps>`
  margin-top: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;

  ${({ urgent }) =>
    urgent === true &&
    css`
      background-color: red;
      background-image: var(--danger-linear);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    `}

  ${({ urgent }) =>
    urgent === false &&
    css`
      color: #2f80ed;
      font-weight: bold;
    `}
`;

export const WaitStudent = styled.p`
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const FooterContainer = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 15px;
  margin-top: 0.5rem;
  padding: 12px 17px 12px 17px;
  box-shadow: 0px 32px 32px rgba(31, 47, 70, 0.06);

  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  min-width: 280px;
  width: 280px;
  @media (max-width: 425px) {
    /* min-width: 100%; */
    min-width: 240px;
  }
  @media (max-width: 425px) {
    padding: 8px;
  }
  button {
    margin: 0 0.1rem;
  }
`;

export const NextBill = styled.p`
  font-size: 0.9rem;
  color: black;

  span {
    font-weight: bold;
  }
`;

export const Bill = styled.p`
  font-size: 0.9rem;
  color: #ed3561;
`;
