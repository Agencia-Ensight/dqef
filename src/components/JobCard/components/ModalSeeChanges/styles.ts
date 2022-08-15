import styled from "styled-components";

export const Description = styled.div`
  width: 100%;
  height: 150px;
  border: solid #42a4ef;
  border-radius: 15px;
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
  width: 100%;
  height: 50px;
  border: solid #42a4ef;
  border-radius: 99px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

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
  margin-bottom: 80px; ;
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
    color: #42a4ef;
  }
  h2 {
    font-size: 36px;
    font-weight: 500;
    color: #42a4ef;
  }
`;

export const ButtonFinaleira = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  h4 {
    font-size: 24px;
    font-weight: 400, Regular;
    color: #4e4e4e;
  }
`;
export const ContainerLastDescription = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
  }
  span {
    text-decoration: underline;
  }
`;
