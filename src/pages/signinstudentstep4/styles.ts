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
  align-items: center;

  height: 90vh;

  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }

  form {
    width: 40%;
    height: 100%;
    padding: 5% 5%;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;
export const ContainerImage = styled.div`
  width: auto;
  height: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.div`
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
  div {
    display: flex;
    align-items: center;
    margin: 1rem 0rem;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #4e4e4e;
  }

  /* padding: 5% 5%; */
  @media (max-width: 600px) {
    padding: 10% 5%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
