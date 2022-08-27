import styled from "styled-components";

export const Wrapper = styled.div`
  input,
  label {
    display: block;
  }

  label {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;

    span {
      color: #e62f5b;
    }
  }

  input {
    width: 100%;

    padding: 10px 29px;
    border: 2px solid #42a4ef;
    border-radius: 99px;
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
  }
`;

export const Error = styled.span`
  color: #e62f5b !important;
`;

export const Container = styled.div``;

export const leftContent = styled.div`
  font-size: 16px;
  margin-left: 0.5rem;
`;
