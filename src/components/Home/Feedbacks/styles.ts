import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  margin-top: 8rem;
`;

export const Container = styled.div`
  margin: 0 0 0 5%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2.3rem;
  text-align: center;
  padding-top: 6rem;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: var(--content-text);
  margin-top: 1.2rem;
  text-align: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  gap: 50px;
  padding-top: 4rem;
  padding-bottom: 6rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;
