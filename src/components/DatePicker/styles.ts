import styled from "styled-components";

export const Container = styled.div`
  label {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;

    span {
      color: #e62f5b;
    }
  }

  input {
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
    font-size: 18px;
    padding: 10px 29px;

    &::placeholder {
      color: #848484;
    }

    &:disabled {
      background: #e0e0e0;
    }
  }
`;
