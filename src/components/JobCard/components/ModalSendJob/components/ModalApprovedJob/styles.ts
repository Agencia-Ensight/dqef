import styled from "styled-components";

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

export const ButtonBang = styled.div`
  width: 500px;
  height: 50px;
  border: solid #e6de22;
  border-radius: 99px;
  margin: 0 auto;
  text-align: center;

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: black;
  }
`;
export const NerdImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const TextInformation = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 10px;
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #4e4e4e;
  }
  span {
    color: #e6de22;
  }
  div {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const ButtonFinaleira = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;
