import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const ContainerInformation = styled.div`
  padding: 4% 5%;
  width: 75%;
  overflow-y: scroll;

  a {
    text-decoration: none;
    color: var(--blue);
    cursor: pointer;
  }
  h1 {
    margin-top: 10px;
    font-weight: 500;
    color: black;
    font-size: 36px;
  }

  p {
    margin-top: 10px;
    color: #4e4e4e;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  .input-root {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .combobox-root {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

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
  h3 {
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
