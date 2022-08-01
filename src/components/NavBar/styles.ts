import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
  position: sticky;
  top: 0;
  z-index: 9999;
  background: white;

  a{
    text-decoration: none;

  }
`;

export const ButtonLogin = styled.button`
  border: 3px solid #42a4ef;
  background: transparent;
  padding: 4px 20px;
  font-size: 16px;
  color: var(--text-title);
  font-weight: 700;

  border-radius: 99px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  img {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const MenuItem = styled.a`
  font-size: 1.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: var(--black-text);
  margin-right: 1.5rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Line = styled.div`
  border-left: 1.5px solid var(--gray-stroke);
  height: 20px;
  margin-right: 1.5rem;
`;

export const ImageDefault = styled.button`
  margin-left: 30px;
`;
