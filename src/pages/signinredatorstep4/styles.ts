import styled from "styled-components";

export const Image = styled.img`
  width: 100%;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 1100px) {
    width: 60%;
  }
`;
export const Wrapper = styled.div`
  width: 1500px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;

  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const ContainerImage = styled.div`
  position: fixed;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContainerInformationDosBang = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContainerInformation = styled.div`
  float: right;

  input {
    width: 130px;
  }

  a {
    text-decoration: none;
    color: var(--blue);
    cursor: pointer;
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
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 30px;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #4e4e4e;
    margin-left: 5px;
  }

  padding: 243px 120px 269px 69px;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }
`;
