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

  padding: 243px 120px 269px 69px;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
