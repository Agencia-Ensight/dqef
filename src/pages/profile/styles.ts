import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 51px;
  padding: 0 1rem;
  margin-top: 58px;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  h4 {
    font-size: 36px;
    font-weight: 500;
    color: black;
    margin-bottom: 41px;
    @media (max-width: 600px) {
      text-align: center;
      font-size: 30px;
    }
  }
`;

export const ContainerProfileCard = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
