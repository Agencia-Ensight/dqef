import { useState } from "react";
import { text } from "stream/consumers";
import * as S from "./styles";
import { Props } from "./typings";

export function FAQCard({
}) {
  return (
    <S.Wrapper>
      <S.Title>Perguntas frequentes</S.Title>
      <S.QuestionHeader>
        {/* Avatar img rounded */}
        <S.AvatarImg src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
        <S.QuestionHeaderText>
          {/* Question redator name */}
          <S.QuestionHeaderName>
            Name
          </S.QuestionHeaderName>
          {/* Redator Rating */}
          <S.QuestionHeaderRating>
            <S.QuestionHeaderRatingIcon src="https://img.icons8.com/color/48/000000/star.png" alt="rating" />
            5.0
          </S.QuestionHeaderRating>
        </S.QuestionHeaderText>
      </S.QuestionHeader>
      <S.QuestionTitle>
        Pergunta
      </S.QuestionTitle>
      <S.QuestionDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </S.QuestionDescription>
      <S.Answer>
        <S.AnswerIcon src="https://img.icons8.com/color/48/000000/checkmark.png" alt="answer" />
        <div>
          <S.AnswerTitle>
            Resposta
          </S.AnswerTitle>
          <S.AnswerDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.AnswerDescription>
        </div>
      </S.Answer>

    </S.Wrapper>
  );
}
