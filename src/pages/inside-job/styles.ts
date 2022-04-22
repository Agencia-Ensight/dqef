import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 5%;
  display: flex;
  gap: 30px;
  margin-top: 2.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Container = styled.div`
  width: 100%;
`;

export const FilesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  gap: 37px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
