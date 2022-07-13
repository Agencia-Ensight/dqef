import styled from "styled-components";

export const SelectContainer = styled.div`
  display: inline-grid;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputFields = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 2.8rem;

  .dropzone {
    border: 2px solid #42a4ef;
    box-sizing: border-box;
    border-radius: 15px;
    height: 100px;
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

export const FirstInputContainer = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
