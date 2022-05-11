import styled from "styled-components";

export const InputFields = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 2.8rem;
`;

export const FirstInputContainer = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;
export const TextInputContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  .type-of-work {
    width: 259px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const SecondInputContainer = styled.div`
  width: 100%;
  gap: 20px;

  display: flex;
  gap: 50px;
`;

export const SelectContainer = styled.div`
  display: inline-grid;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const LastInputs = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;
