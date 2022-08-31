import styled from "styled-components";

export const Container = styled.div`
  label {
    color: #53647e;
    font-size: 18px;

    span {
      color: #e62f5b;
    }
  }

  section {
    margin-top: 10px;
    border: 2px solid #42a4ef;
    border-radius: 15px;
    padding: 10px 29px;
  }
`;

export const Input = styled.input`
  width: 100%;

  width: 100%;
  font-size: 18px;

  &::placeholder {
    color: #848484;
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    background: #e0e0e0;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
