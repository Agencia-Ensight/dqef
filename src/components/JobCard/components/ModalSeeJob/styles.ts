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

export const ButtonBang = styled.div`
  padding: 10px 0px;
  border: solid #42a4ef;
  border-radius: 99px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: black;
  }
`;
export const NerdImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const TextInformation = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  align-items: center;
  margin-bottom: 80px;
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
  gap: 20px;
  white-space: nowrap;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const InputText = styled.div`
  border: solid #42a4ef;
  width: 100%;
  height: 175px;
  border-radius: 15px;
  margin-top: 30px;
`;
