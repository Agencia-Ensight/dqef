import styled from "styled-components";

export const Description = styled.p`
  color: #4e4e4e;
  font-size: 18px;
`;

export const InputsContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  gap: 50px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;