import styled from "styled-components";
import { Input } from "../../../../components/Input";

export const Description = styled.p`
  font-size: 1.2rem;
  color: #4e4e4e;
  text-align: center;
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

export const ButtonInputSolid = styled.div`
  .inputsolido {
    margin-top: 20px;
    border-radius: 10px;
    height: 80px;
    &::placeholder {
      text-align: center;
    }
  }
`;

export const ButtonBang = styled.div`
  padding: 10px 10px;
  border: solid #42a4ef;
  border-radius: 99px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;

  p {
    font-size: 16px;
    font-weight: 700;
    color: black;
  }
`;
export const NerdImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 600px) {
    img {
      width: 200px;
      height: 170px;
    }
  }
`;

export const TextInformation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
  align-items: center;
  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #4e4e4e;
  }
  h2 {
    font-size: 36px;
    font-weight: 500;
    color: #42a4ef;
  }
  span {
    color: #e6de22;
  }
`;

export const ButtonFinaleira = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
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
