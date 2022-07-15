import { FormEvent } from "react";
import { useQuery } from "@apollo/client";

import {
  INSERT_ANSWER,
  INSERT_QUESTION,
  QUESTIONS_BY_JOB,
  Question,
} from "@/services/graphql/faq";
import { graphql } from "@/services/api";
import { ButtonKnewave, Input } from "@/components";

import * as S from "./styles";
import { Props } from "./typings";
import { useUser } from "@/contexts";

export function FAQCard({ jobId }: Props) {
  const { user } = useUser();
  const questions = useQuery<{ user_job_questions: Question[] }>(
    QUESTIONS_BY_JOB,
    {
      variables: { job: jobId },
    }
  );

  async function handleQuestionSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await graphql.mutate({
      mutation: INSERT_QUESTION,
      variables: {
        job_id: jobId,
        question: (e.currentTarget.elements as any).question.value,
        user_id: user.id,
      },
    });

    await questions.refetch();

    // Clear input
    (e.currentTarget.elements as any).question.value = "";
  }

  async function handleAnswerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await graphql.mutate({
      mutation: INSERT_ANSWER,
      variables: {
        user_job_question_id: (e.currentTarget.elements as any).question_id
          .value,
        answer: (e.currentTarget.elements as any).answer.value,
      },
    });

    await questions.refetch();

    // Clear input
    (e.currentTarget.elements as any).answer.value = "";
  }

  return (
    <S.Wrapper>
      <S.Title>Perguntas frequentes</S.Title>

      <S.QuestionForm onSubmit={handleQuestionSubmit}>
        <S.InputWrapper>
          <Input name="question" placeholder="Faça sua pergunta" required />
        </S.InputWrapper>
        <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
          Enviar
        </ButtonKnewave>
      </S.QuestionForm>

      {questions.loading && <h1>Carregando...</h1>}
      {questions.error && <h1>Erro!</h1>}
      {!questions.data && <h1>Não encontrado!</h1>}

      {questions.data?.user_job_questions.map((question) => (
        <>
          <S.QuestionHeader>
            <S.AvatarImg
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
            <S.QuestionHeaderText>
              <S.QuestionHeaderName>{question.user.name}</S.QuestionHeaderName>
              <S.QuestionHeaderRating>
                <S.QuestionHeaderRatingIcon
                  src="https://img.icons8.com/color/48/000000/star.png"
                  alt="rating"
                />
                5.0
              </S.QuestionHeaderRating>
            </S.QuestionHeaderText>
          </S.QuestionHeader>
          <S.QuestionTitle>Pergunta</S.QuestionTitle>
          <S.QuestionDescription>{question}</S.QuestionDescription>
          {/* {question.answers.length ? (
            answers.map((answer) => (
              <S.Answer>
                <S.AnswerIcon
                  src="https://img.icons8.com/color/48/000000/checkmark.png"
                  alt="answer"
                />
                <S.AnswerText>
                  <S.AnswerTitle>Resposta</S.AnswerTitle>
                  <S.AnswerDescription>{answer.question}</S.AnswerDescription>
                </S.AnswerText>
              </S.Answer>
            ))
          ) : (
            <S.Answer>
              <S.AnswerIcon
                src="https://img.icons8.com/color/48/000000/checkmark.png"
                alt="answer"
              />
              <S.AnswerText>
                <S.AnswerTitle>Resposta</S.AnswerTitle>
                <S.QuestionForm onSubmit={handleAnswerSubmit}>
                  <Input type="hidden" name="question_id" value={id} />
                  <S.InputWrapper>
                    <Input name="answer" placeholder="Responda aqui" required />
                  </S.InputWrapper>
                  <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
                    Enviar
                  </ButtonKnewave>
                </S.QuestionForm>
              </S.AnswerText>
            </S.Answer>
          )} */}
        </>
      ))}
    </S.Wrapper>
  );
}
