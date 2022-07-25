import styled from "styled-components";

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


export const Title = styled.h1`
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
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

export const SelectContainer = styled.div`
  display: inline-grid;
  @media (max-width: 600px) {
    width: 100%;
  }
`;