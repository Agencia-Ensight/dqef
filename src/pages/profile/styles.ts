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

