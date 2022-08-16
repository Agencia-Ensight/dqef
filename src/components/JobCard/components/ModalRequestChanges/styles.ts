import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const List = styled.p`
  font-size: 1.2rem;
  color: #4e4e4e;
  margin-top: 1rem;
`;

export const Button = styled.button`
  color: #42a4ef;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NerdImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const TextInformation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
  align-items: center;
  p {
    text-align: center;
    color: #4e4e4e;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ButtonFinaleira = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const InputText = styled.div`
  border: solid #42a4ef;
  width: 100%;
  height: 175px;
  border-radius: 15px;
  margin-top: 30px;
`;

export const FileDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.5rem;

  .label-inputfile {
    width: 100%;
    border: 2px solid #42a4ef;
    border-radius: 15px;
    font-size: 18px;
    padding: 10px 29px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
