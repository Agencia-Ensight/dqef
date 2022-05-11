import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 1100px) {
    width: 60%;
  }
`;
export const Wrapper = styled.div`
  width: 1500px;
  display: flex;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  overflow: hidden;

  height: 90vh;

  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const ContainerImage = styled.div`
  width: auto;
  height: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  div {
    margin-bottom: 1rem;
  }

  label {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
  }

  select {
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

  .cpf-input {
    margin-bottom: 1rem;
  }
`;

export const ContainerDoBang = styled.div`
  margin-bottom: 35px;
`;

export const ContainerInformation = styled.div`
  width: 40%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
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

  h3 {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 18px;
  }

  padding: 5% 5%;

  @media (max-width: 600px) {
    padding: 10% 5%;
    width: 100%;
  }
`;
