import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;

  width: 1500px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;

  @media (max-width: 1300px) {
    margin: auto 0px;
  }
`;
export const ContainerImage = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.div`
  padding: 144px 331px 143.7px 113px;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }
  a {
    text-decoration: none;
    color: var(--blue);
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
    cursor: pointer;
  }

  button {
    margin-top: 50px;
  }
`;
