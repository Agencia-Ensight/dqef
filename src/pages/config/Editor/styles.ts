import styled from "styled-components";

export const ContainerLine = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const SpecialOne = styled.div`
  width: 100%;
  div {
    width: 100%;
  }
h3{
  color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
}

  
`;

export const ContainerMini = styled.div`
  align-items: center;
  width: 260px;
  @media (max-width: 600px) {
    width: 100%;
  }
  h3 {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
  }
  select {
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 260px;
    height: 51px;
    font-size: 18px;
    padding: 10px 29px;
    @media (max-width: 600px) {
      width: 100%;
    }
    &::placeholder {
      color: #848484;
    }
  }
`;

export const ContainerInformationDosBang = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

