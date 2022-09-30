import styled, { css } from "styled-components";

type Props = {
  visible: boolean;
};

export const Wrapper = styled.div<Props>`
  position: relative;
  display: none;

  a {
    z-index: 2;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2%;
    border-bottom: 1px solid #d1d1d1;
  }
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #ffffff;
  width: 250px;
  transform: translateX(-110%);
  transition: 0.6s;
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(230 230 230 / 35%);
  height: 100%;
  padding: 15px 20px;

  ${(props) =>
    props.visible &&
    css`
      transform: translateX(0);
    `}

  button {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-family: "Knewave", sans-serif;
  color: #42a4ef;
  margin-top: 30px;
`;

export const SubTitle = styled.h3`
  color: black;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 500;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;

  img {
    width: 30px;
    height: 30px;
  }

  h2{
    font-size: 1.125rem;
    color: black;
    font-weight: 500;
  }
`

export const ExtraInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;


  img{
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`

