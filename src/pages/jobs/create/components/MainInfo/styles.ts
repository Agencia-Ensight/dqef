import styled from "styled-components";

export const BackButton = styled.a`
    text-decoration: none;
    color: var(--blue);
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
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

export const InputFields = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 2.8rem;

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
`;

export const FirstInputContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    gap: 20px;
  }
`;
export const TextInputContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  .type-of-work {
    width: 259px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const SecondInputContainer = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  gap: 50px;
`;

export const SelectContainer = styled.div`
  display: inline-grid;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LastInputs = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;


  export const Title = styled.h1`
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
  `

  export const DangerText = styled.h6`
    color: red;
    margin-top: 10px;
  `