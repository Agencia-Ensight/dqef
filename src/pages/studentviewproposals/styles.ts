import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;
  gap: 38px;
  margin: 50px 90px 72px 120px;

  @media (max-width: 600px) {
    margin: 5% 5%;
  }

  h4 {
    font-size: 36px;
    font-weight: 500;
    color: black;
    margin-bottom: 41px;
  }

  a {
    font-size: 18px;
    font-weight: 600;
    color: #42a4ef;
    margin-bottom: 10px;
  }

  button {
    font-size: 18px;
    font-weight: 600;
    color: #42a4ef;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: #000000;

    @media (max-width: 600px) {
      font-size: 26px;
    }
  }
`;

export const Line = styled.div``;
export const ContainerProfileCard = styled.div`
  margin-top: 35px;
`;
export const ContainerJobCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
