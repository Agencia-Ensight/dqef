import styled from "styled-components";

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  padding: 85px 213px 78px 213px;

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
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
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
  }

  image {
    display: block;
    margin: 0 auto;
  }
`;

export const ContainerChoose = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  box-sizing: border-box;
  color: #42a4ef;

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

  div {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 23.07px;
  }
`;
