import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;
  display: flex;
  width: 1500px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;

  @media (max-width: 1300px) {
    margin: auto 0px;
  }
`;

export const Line = styled.div``;
export const ContainerImage = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.div`
  a {
    text-decoration: none;
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

  span {
    color: var(--blue);
  }

  button {
    margin-top: 50px;
  }

  div {
    align-items: center;
    margin-top: 24.5px;
  }

  h2 {
    margin-left: 5px;
  }

  hr {
    width: 100%;

    background-color: #d1d1d1;
    margin-top: 50px;
    height: 0.5px;
  }

  padding: 241px 120px 236px 69px;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
