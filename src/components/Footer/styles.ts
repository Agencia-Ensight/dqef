import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-bottom: 1rem;
  padding-top: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }

  p {
    font: 700;
    color: var(--content-text);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Anchor = styled.a`
  cursor: pointer;
  color: var(--blue);
  margin-left: 1rem;
  text-decoration: none;
`;
