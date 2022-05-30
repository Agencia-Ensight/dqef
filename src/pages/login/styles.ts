import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 1500px;
  max-width: 100%;
  position: relative;
  /* margin: 0 auto; */
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  @media (max-width: 1300px) {
    margin: auto 0px;
  }
`;

export const Line = styled.div``;
export const ContainerImage = styled.div`
  width: 70%;
  height: 93vh;

  @media (max-width: 600px) {
    display: none;
    height: 50vh;
  }
`;
export const ContainerInformation = styled.div`
  width: 60%;

  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
    margin-left: 5px;
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

  span {
    color: var(--blue);
  }

  button {
    margin-top: 50px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h5 {
    color: black;
  }

  hr {
    width: 100%;

    background-color: #d1d1d1;
    margin-top: 50px;
    height: 0.5px;

    @media (max-width: 600px) {
      margin-top: 10px;
    }
  }

  /* padding: 139px 120px 131px 69px; */
  /* padding: 10% 5%; */
  padding: 1% 5% 0 5%;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 5%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;

  div {
    margin-bottom: 2rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;
