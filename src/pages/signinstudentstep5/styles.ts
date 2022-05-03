import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;
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
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.div`
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
    margin-right: 25px;
    @media (max-width: 600px) {
      margin-top: 30px;
    }
  }

  padding: 202px 160px 202.7px 69px;

  @media (max-width: 600px) {
    padding: 5% 10%;
  }
`;
