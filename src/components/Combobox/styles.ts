import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  label {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;

    span {
      color: #e62f5b;
    }
  }

  .combobox-options {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 10;
    background: white;
    color: #222;
    border: 1px solid #eee;
    margin: 5px 0;

    span {
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;

export const ComboWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid #42a4ef;
  border-radius: 99px;
  padding: 10px 29px;

  input {
    width: 100%;
    border: 0;
    background: transparent;
    outline: 0;

    &::placeholder {
      color: #848484;
    }

    &:disabled {
      background: #e0e0e0;
    }
  }
`;
