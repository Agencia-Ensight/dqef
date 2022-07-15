import styled from "styled-components";

export const Image = styled.img``;
export const Wrapper = styled.div`
  /* margin: 50px 69px 124px 120px; */
  margin: 2% 5%;

  .backContainer {
    margin-bottom: 24px;
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
    margin-bottom: 24px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 24px;

    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
`;

export const Line = styled.div``;
export const ContainerProfileCard = styled.div``;
export const ContainerJobCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContainerBigCard = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgb(198 198 198 / 25%);
  padding: 28px 100px 27.71px 32.5px;

  @media (max-width: 600px) {
    padding: 5% 5%;
  }
  margin-bottom: 29px;

  div {
    display: flex;
    margin-bottom: 29px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #969696;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #4e4e4e;
    margin-bottom: 20px;
  }

  span {
    color: #42a4ef;
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 38px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerReview = styled.div``;
