import styled from "styled-components";

export const InputContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  div {
    margin-bottom: 1rem;
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
`