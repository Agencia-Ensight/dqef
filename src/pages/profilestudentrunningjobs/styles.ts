import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;
  gap: 51px;
  margin-left: 5%;
  margin-right: 2%;
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
    }
  }
`;

export const Line = styled.div``;
export const ContainerProfileCard = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
export const ContainerJobCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
