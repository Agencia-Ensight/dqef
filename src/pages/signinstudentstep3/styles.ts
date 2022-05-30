import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;


  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const ContainerImage = styled.div`
width: 70%;
    height: 93vh;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const ContainerInformation = styled.div`
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

  padding: 237px 120px 296px 69px;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }
`;
export const InputContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
