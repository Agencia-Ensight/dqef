import styled from "styled-components";

export const Description = styled.p`
  font-size: 1.2rem;
  color: #4e4e4e;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const List = styled.p`
  font-size: 1.2rem;
  color: #4e4e4e;
  margin-top: 1rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  color: #42a4ef;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
