import styled from "styled-components";

export const MainWrapper = styled.div`
  @media (max-width: 600px) {
    overflow-x: hidden;
  }
`;

export const Wrapper = styled.div`
  width: 388px;
  min-width: 388px;
  background: white;
  box-shadow: 0px 0px 20px rgba(198, 198, 198, 0.25);
  border-radius: 15px;
  padding: 50px 40px 10px 40px;

  @media (max-width: 600px) {
    width: auto;
    min-width: auto;

    padding-bottom: 20px;
  }
`;

export const Course = styled.h2`
  font-size: 1.8rem;
  font-family: "Knewave", sans-serif;
  color: #42a4ef;
  text-align: center;
  margin-top: 1rem;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 3px solid #42a4ef;
  display: block;
  margin: 0 auto;
`;

export const ProfileName = styled.h1`
  font-size: 2.3rem;
  color: black;
  text-align: center;
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.6rem;
  align-items: center;
`;

export const RatingNumber = styled.h2`
  color: var(--text-body);
  font-weight: 600;
  font-size: 18px;
  margin-left: 8px;
`;

export const MainInfo = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const InfoTitle = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  color: #4e4e4e;
  margin-left: 0.5rem;
  cursor: pointer;

  @media (max-width: 600px) {
    white-space: nowrap;
  }

  &.selected {
    color: #42a4ef;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #42a4ef;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 30px;
    overflow-y: scroll;
  }
`;
