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

export const Image = styled.img`
  width: 35%;
  height: auto;
  @media (max-width: 425px) {
    width: 218px;
    height: 186px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonBang = styled.div`
  width: 100%;

  border: solid #e6de22;
  border-radius: 99px;
  margin: 0 auto;
  text-align: center;
  padding: 10px 20px;
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
`;

export const TextInformation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #4e4e4e;
    @media (max-width: 425px) {
      font-size: 16px;
      text-align: center;
    }
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
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin-top: 46px;
  }
`;
