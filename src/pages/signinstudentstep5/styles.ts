import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 1500px;
  max-width: 100%;
  position: relative;
  /* margin: 0 auto; */
  justify-content: center;
  overflow: hidden;
  align-items: center;

  height: 100vh;
  @media (max-width: 600px) {
    display: block;
  }

  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const ContainerImage = styled.div`
  width: 60%;
  height: 93vh;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.div`
  height: 100%;
  width: 40%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: var(--blue);
  }
  h1 {
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
  }

  p {
    margin-top: 10px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 18px;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 50px;
    @media (max-width: 600px) {
      display: block;
    }
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #4e4e4e;
  }
  button {
    margin-left: 25px;
    @media (max-width: 600px) {
      margin-top: 30px;
      margin-left: 0px;
    }
  }

  padding: 202px 100px 202.7px 69px;

  @media (max-width: 600px) {
    padding: 5% 10%;
    width: 100%;
  }
`;

export const CongratulationImage = styled.img``;
