import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1500px;
  max-width: 100%;
  position: relative;
  justify-content: center;
  overflow: hidden;
  height: 100vh;

  @media (max-width: 1300px) {
    margin: auto 0px;
  }

  span {
    color: #4e4e4e;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  width: 40%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  h3 {
    color: #53647e;
    font-size: 18px;
    margin-bottom: 10px;
  }

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
  }

  padding: 47px 120px 26px 69px;

  @media (max-width: 600px) {
    padding: 10% 5%;
  }
`;
