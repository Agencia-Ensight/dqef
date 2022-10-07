import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 10px 25px rgba(198, 198, 198, 0.1);
  border-radius: 20px;
  padding: 27px 37px 35px 36px;
  width: 100%;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const QuestionForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  align-items: center;
  width: 100%;
`;

export const QuestionHeader = styled.div`
  display: flex;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-right: 1rem;
`;

export const QuestionHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const QuestionHeaderName = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const QuestionHeaderRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const QuestionHeaderRatingIcon = styled.img`
  height: 25px;
  width: 25px;
`;

export const QuestionTitle = styled.h3`
  color: #53647e;
  font-size: 1rem;
`;

export const QuestionDescription = styled.p`
  color: black;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const Answer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const AnswerIcon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 0.5rem;
`;

export const AnswerText = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const AnswerTitle = styled.h3`
  color: #53647e;
  font-size: 1rem;
`;

export const AnswerDescription = styled.p`
  color: black;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
