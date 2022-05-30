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
  /* margin: 0 auto; */
  align-items: center;
  height: 91vh;
  gap: 69px;

  @media (max-width: 1300px) {
    margin: auto 0px;
  }

  form {
    @media (max-width: 600px) {
      width: 100%;
    }
    div {
      margin-bottom: 0.5rem;
      margin-top: 2rem;
    }
  }
`;

export const Line = styled.div``;
export const ContainerImage = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.div`
  a {
    text-decoration: none;
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

  div {
    align-items: center;
  }

  h2 {
    margin-top: 50px;
  }

  hr {
    width: 100%;

    background-color: #d1d1d1;
    margin-top: 50px;
    height: 0.5px;
  }

  /* padding: 204px 120px 195px 69px; */

  @media (max-width: 600px) {
    padding: 5% 10%;
  }
`;
