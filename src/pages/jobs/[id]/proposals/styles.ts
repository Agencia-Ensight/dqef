import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 5%;
  padding: 0 1rem;
`;

export const BackButton = styled.button`
  margin-top: 3rem;

  color: #42a4ef;
  border: none;
  font-size: 1.125rem;
  font-weight: 600;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  color: black;

  margin-top: 0.5rem;
`;

export const Container = styled.div`
  margin: 2rem 0;

  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
