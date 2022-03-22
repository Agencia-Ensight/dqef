import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  box-shadow: 0px 0px 50px rgba(198, 198, 198, 0.35);
border-radius: 35px;
border: 3px solid #42A4EF;
  width: 70vw;
  height: 85vh;
  padding: 71px 58px 30px 58px; 
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  width: 100%;
`;

export const HeaderText = styled.h3`
  align-self: center;
  color: black;
  font-size: 2.5rem;
`;

export const CloseButton = styled.button`
  background: var(--blue-linear);
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  font-family: 'Knewave', sans-serif;
 font-size: 1.5rem;
 border-radius: 50%;
 padding: 8px 21px 8px 21px;
 position: absolute;
 top: 12%;
 right: 5%;
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
