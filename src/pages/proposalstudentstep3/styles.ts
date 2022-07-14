import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;

  .dropzone {
    border: 2px solid #42a4ef;
    box-sizing: border-box;
    border-radius: 15px;
    height: 100px;
    margin-top: 10px;
  }

  .input-root {
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  textarea {
    width: 100%;
    margin-top: 10px;

    border: 2px solid #42a4ef;
    border-radius: 15px;

    font-size: 18px;
    padding: 10px 29px;
    margin-bottom: 30px;

    &::placeholder {
      color: #848484;
    }
  }

  label {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;

    span {
      color: #e62f5b;
    }
  }

  select {
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
    font-size: 18px;

    &::placeholder {
      color: #848484;
    }
  }

  .padrao {
    width: 259.57px;
    height: 50px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;
export const ContainerImage = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.form`
  overflow-y: scroll;
  width: 60%;

  padding: 5% 5%;

  @media (max-width: 600px) {
    padding: 10% 5%;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: var(--blue);
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
  h1 {
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #42a4ef;
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
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Steps = styled.h5`
  background-color: red;

  background-image: linear-gradient(180deg, #56ccf2 0%, #2f80ed 100%);

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-size: 24px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SelectContainer = styled.div`
  display: inline-grid;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputFields = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 2.8rem;
`;

export const FirstInputContainer = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;
