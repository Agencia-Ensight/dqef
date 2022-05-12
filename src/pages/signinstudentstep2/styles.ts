import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 1500px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  overflow: hidden;

  height: 100vh;

  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }

  button {
    margin-top: 3.5rem;
  }
`;
export const ContainerImage = styled.div`
  width: 60%;
    height: 93vh;
  @media (max-width: 600px) {
    display: none;
  }
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



export const InputContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;


  .testesolidopadrao{ 
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
    height: 51px;
    margin-top: 10px;
    display: flex;
    align-items: center;

    


  }
  

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
    font-size: 18px;

    



    &::placeholder {
      color: #848484;
    }
  }
`;
