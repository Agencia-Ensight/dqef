import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  display: flex;
  width: 1500px;
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  form{
    overflow-y: scroll;
  }


  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }

  .select-colleges{
    border: 2px solid #42a4ef;
    border-radius: 99px;
    width: 100%;
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

  .select-colleges select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

  }


  
`;

export const ContainerImage = styled.div`
  width: 40%;
  height: auto;

  @media (max-width: 600px) {
    display: none;
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

export const ContainerInformation = styled.div`
  padding: 47px 10px 26px 69px;
  width: 70%;

  @media (max-width: 600px) {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--blue);
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


  @media (max-width: 600px) {
    padding: 10% 5%;
  }

  
`;
