import styled from "styled-components";

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 50%;
`;

export const Wrapper = styled.div`
  padding-bottom: 30px;

  height: 70vh;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }

  span {
    color: #42a4ef;
    font-weight: 400;
    font-size: 24px;
  }
`;

export const ContainerBang = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: #42a4ef;
  text-align: center;
  margin-top: 50px;
  text-decoration: underline;
`;

export const ContainerButtons = styled.div`
  a {
    text-decoration: none;
    color: var(--blue);
  }

  h1 {
    font-weight: 400;
    font-size: 48px;
    color: black;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;

    @media (max-width: 600px) {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  p {
    margin-top: 10px;
    color: #2c2c2c;
    font-weight: 600;
    font-size: 18px;
    margin-top: 15px;
  }
  span {
    font-size: 24px;
    font-weight: 400;
    color: #42a4ef;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  image {
    display: block;
    margin: 0 auto;
  }
`;

export const ContainerChoose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  box-sizing: border-box;
  color: #42a4ef;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }

  p {
    text-align: center;
    padding: 81, 5px;
    color: #2c2c2c;
  }
`;

export const Containerstudent = styled.div`
  border: solid;
  border-radius: 15px;
  width: 482px;
  height: auto;
  padding: 10px 35px;

  h5 {
    color: black;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 23.07px;
  }
`;
