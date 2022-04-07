import styled, {css} from "styled-components";

type Props = {
    visible: boolean;
  };

export const Wrapper = styled.div<Props>`
position: relative;
    display: none;

    

  a {
    z-index: 2;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 2%;
  }
`

export const Container = styled.div<Props>`
    display: block;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #FFFFFF;
  width: 250px;
  transform: translateX(-110%);
  transition: 0.6s;
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 20%), 0 2px 30px 0 rgb(230 230 230 / 35%);
  height: 100%;
  padding: 15px 20px;

  ${(props) =>
    props.visible &&
    css`
      transform: translateX(0);
    `}

  button{
    margin-top: 20px;
  }
`

export const Title = styled.h1`
  font-size: 28px;
  font-family: 'Knewave', sans-serif;
  color: #42A4EF;
  margin-top: 30px;
`

export const SubTitle = styled.h3`
  color: black;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 500;

`