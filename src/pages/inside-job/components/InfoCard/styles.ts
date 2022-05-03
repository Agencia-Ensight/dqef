import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 10px 25px rgba(198, 198, 198, 0.1);
  border-radius: 20px;
  padding: 27px 37px 35px 36px;
  width: 100%;
`;

export const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const SubTitle = styled.h2`
  color: black;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #4e4e4e;
  margin-bottom: 1.5rem;

  span {
    cursor: pointer;
  }
`;

export const SecondDescription = styled.p`
  font-size: 1.2rem;
  color: black;
`;

export const Line = styled.div`
  border-left: 2px solid #42a4ef;
  height: 20px;
  margin: 0 0.5rem;
`;

export const Span = styled.span`
  color: #42a4ef;
  font-weight: bold;
`;
