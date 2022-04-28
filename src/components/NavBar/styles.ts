import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
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

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Line = styled.div`
  border-left: 1.5px solid var(--gray-stroke);
  height: 20px;
  margin-right: 1.5rem;
`;

export const ImagePadrao = styled.div`
  margin-left: 30px;
`;
