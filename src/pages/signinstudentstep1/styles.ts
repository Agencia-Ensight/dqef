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
  margin: 0 auto;
  justify-content: center;
  overflow: hidden;

  height: 100vh;

  @media (max-width: 1300px) {
    margin: auto 0px;
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
  width: 40%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  h3 {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    padding: 10px 29px;

    &::placeholder {
      color: #848484;
    }
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
  }

  padding: 47px 120px 26px 69px;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  div {
    margin-bottom: 1rem;
  }
`;
