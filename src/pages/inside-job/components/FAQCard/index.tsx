import { useQuery } from "@apollo/client";
import { useContext, useState } from "react";
import { text } from "stream/consumers";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import { Input } from "../../../../components/Input";
import { AuthContext } from "../../../../contexts/AuthContext";
import { INSERT_ANSWER, INSERT_QUESTION, QuestionData, QUESTIONS_BY_JOB } from "../../../../queries/faq";
import { apolloClient } from "../../../_app.page";
import * as S from "./styles";
import { Props } from "./typings";

export function FAQCard({ jobId }: Props) {
  const { data: questions, error: questionsError, loading: questionsLoading, refetch: refetchQuestions } = useQuery<QuestionData>(QUESTIONS_BY_JOB, {
    variables: { job: jobId }
  });
  const { userData } = useContext(AuthContext)!;

  const handleQuestionSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    apolloClient.mutate({
      mutation: INSERT_QUESTION,
      variables: {
        job_id: jobId,
        question: (e.currentTarget.elements as any).question.value,
        user_id: userData.id,
      },
    }).then(() => {
      refetchQuestions();
    });

    // Clear input
    (e.currentTarget.elements as any).question.value = "";
  }

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    apolloClient.mutate({
      mutation: INSERT_ANSWER,
      variables: {
        user_job_question_id: (e.currentTarget.elements as any).question_id.value,
        answer: (e.currentTarget.elements as any).answer.value,
      },
    }).then(() => {
      refetchQuestions();
    });

    // Clear input
    (e.currentTarget.elements as any).answer.value = "";
  }

  return (
    <S.Wrapper>
      <S.Title>Perguntas frequentes</S.Title>

      <S.QuestionForm onSubmit={handleQuestionSubmit}>
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

      {questionsLoading ? <div>Carregando...</div> :
        questionsError ? <div>Erro ao carregar perguntas</div> :
          questions!.user_job_questions.map(({ id, question, user_job_question_replies: answers, user: { name: userName } }) => (
            <>
              <S.QuestionHeader>
                <S.AvatarImg src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
                <S.QuestionHeaderText>
                  <S.QuestionHeaderName>
                    {userName}
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
                {question}
              </S.QuestionDescription>
              {answers.length ? answers.map((answer) => (
                <S.Answer>
                  <S.AnswerIcon src="https://img.icons8.com/color/48/000000/checkmark.png" alt="answer" />
                  <S.AnswerText>
                    <S.AnswerTitle>
                      Resposta
                    </S.AnswerTitle>
                    <S.AnswerDescription>
                      {answer.question}
                    </S.AnswerDescription>
                  </S.AnswerText>
                </S.Answer>
              )) :
                <S.Answer>
                  <S.AnswerIcon src="https://img.icons8.com/color/48/000000/checkmark.png" alt="answer" />
                  <S.AnswerText>
                    <S.AnswerTitle>
                      Resposta
                    </S.AnswerTitle>
                    <S.QuestionForm onSubmit={handleAnswerSubmit}>
                      <Input type="hidden" name="question_id" value={id} />
                      <S.InputWrapper>
                        <Input
                          name="answer"
                          placeholder="Responda aqui"
                          required
                        />
                      </S.InputWrapper>
                      <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
                        Enviar
                      </ButtonKnewave>
                    </S.QuestionForm>
                  </S.AnswerText>
                </S.Answer>
              }
            </>
          )
          )
      }

    </S.Wrapper>
  );
}
