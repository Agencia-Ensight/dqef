import { useState } from "react";
import { text } from "stream/consumers";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import { Input } from "../../../../components/Input";
import * as S from "./styles";
import { Props } from "./typings";

export function FAQCard({
}) {
  return (
    <S.Wrapper>
      <S.Title>Perguntas frequentes</S.Title>

      <S.QuestionForm>
        <S.InputWrapper>
          <Input
            name="question"
            placeholder="Faça sua pergunta"
            required
          />
        </S.InputWrapper>
        <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
          Enviar
        </ButtonKnewave>
      </S.QuestionForm>

      <S.QuestionHeader>
        <S.AvatarImg src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
        <S.QuestionHeaderText>
          <S.QuestionHeaderName>
            Name
          </S.QuestionHeaderName>
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
