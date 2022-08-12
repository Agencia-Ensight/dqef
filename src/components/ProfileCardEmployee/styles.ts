import styled from "styled-components";

export const Wrapper = styled.div`
  width: 388px;
  min-width: 388px;
  background: white;
  box-shadow: 0px 0px 20px rgba(198, 198, 198, 0.25);
  border-radius: 15px;
  padding: 2.5rem 2.5rem 0.625rem 2.5rem;

  @media (max-width: 600px) {
    width: 330px;
    min-width: 330px;
  }
`;

export const Course = styled.h2`
  font-size: 1.8rem;
  font-family: "Knewave", sans-serif;
  color: #42a4ef;
  margin-top: 1rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Price = styled.h3`
  background: #42a4ef;
  border-radius: 5px;
  padding: 8px 7px 8px 17px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: -1rem;
  z-index: 1;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 3px solid #42a4ef;
  z-index: 2;
`;

export const ProfileName = styled.h1`
  font-size: 2.3rem;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RatingContainer = styled.div`
  display: flex;
  margin-top: 0.6rem;
`;

export const InfoContainer = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const InfoTitle = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  color: #4e4e4e;
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #d1d1d1;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-y: scroll;
  margin-top: 1rem;
  gap: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  background: #ffffff;

  box-shadow: 0px 10px 25px rgba(198, 198, 198, 0.1);
  border-radius: 15px;
  padding: 14px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

export const ButtonSee = styled.button`
  border: none;
  cursor: pointer;
  background: linear-gradient(180deg, #56ccf2 0%, #2f80ed 100%);
  white-space: nowrap;
  border-radius: 99px;

  font-size: 1rem;
  color: white !important;
  padding: 8px 28.5px;
`;
export const ButtonStart = styled.button`
  border: none;
  cursor: pointer;

  background: linear-gradient(190.27deg, #35ed68 6.53%, #17cd4a 91.31%);

  border-radius: 99px;

  font-size: 1rem;
  color: white !important;
  padding: 8px 28.5px;
`;
