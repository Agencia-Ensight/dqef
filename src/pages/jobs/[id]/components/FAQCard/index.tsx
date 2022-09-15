import { useState } from "react";

import { ButtonKnewave, Input } from "@/components";

import * as S from "./styles";
import { Props } from "./typings";
import { useToast, useUser } from "@/contexts";
import { useJobQuestions } from "@/hooks/useJobQuestions";
import { useAddJobQuestion, useAnswerJobQuestion } from "@/hooks";

type IAnswer = {
  refetchQuestions(): Promise<void>;
  questionId: string;
};

function Answer({ refetchQuestions, questionId }: IAnswer) {
  const answerQuestion = useAnswerJobQuestion();
  const { addToast } = useToast();
  const { user } = useUser();
  const [answer, setAnswer] = useState("");

  async function handleAnswerSubmit() {
    if (!user) {
      return addToast({
        msg: "Você precisa estar logado para publicar uma questão.",
        type: "error",
      });
    }

    try {
      await answerQuestion.addAnswer({ answer, questionId });
      setAnswer("");
      await refetchQuestions();
    } catch (err) {
      return addToast({
        msg: "Aconteceu um erro ao enviar a resposta.",
        type: "error",
      });
    }
  }

  return (
    <S.Answer>
      <S.AnswerIcon
        src="https://img.icons8.com/color/48/000000/checkmark.png"
        alt="answer"
      />
      <S.AnswerText>
        <S.AnswerTitle>Resposta</S.AnswerTitle>
        <S.QuestionForm>
          <Input type="hidden" name="question_id" />
          <S.InputWrapper>
            <Input
              name="answer"
              placeholder="Responda aqui"
              required
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
            />
          </S.InputWrapper>
          <ButtonKnewave
            variant="PRIMARY"
            size="sm"
            loading={answerQuestion.isLoading}
            disabled={answerQuestion.isLoading}
            onClick={() => handleAnswerSubmit()}
          >
            Enviar
          </ButtonKnewave>
        </S.QuestionForm>
      </S.AnswerText>
    </S.Answer>
  );
}

export function FAQCard({ jobId, jobOwnerId }: Props) {
  const [question, setQuestion] = useState("");
  const { user } = useUser();
  const questions = useJobQuestions(jobId);
  const addQuestion = useAddJobQuestion(jobId);
  const { addToast } = useToast();

  async function handleQuestionSubmit() {
    if (!user) {
      return addToast({
        msg: "Você precisa estar logado para publicar uma questão.",
        type: "error",
      });
    }

    if (user.type !== "EDITOR") {
      return addToast({
        msg: "Somente editores podem enviar perguntas.",
        type: "error",
      });
    }

    try {
      await addQuestion.addQuestion(question);
      setQuestion("");
      await questions.refetch();
    } catch (err) {
      return addToast({
        msg: "Aconteceu um erro ao enviar a pergunta.",
        type: "error",
      });
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Perguntas frequentes</S.Title>

      <S.QuestionForm>
        <S.InputWrapper>
          <Input
            name="question"
            placeholder="Faça sua pergunta"
            required
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
        </S.InputWrapper>
        <ButtonKnewave
          variant="PRIMARY"
          type="submit"
          size="sm"
          onClick={handleQuestionSubmit}
          loading={addQuestion.isLoading}
          disabled={addQuestion.isLoading}
        >
          Enviar
        </ButtonKnewave>
      </S.QuestionForm>

      {questions.isLoading && <h1>Carregando...</h1>}
      {questions.error && <h1>Erro!</h1>}
      {!questions.data && <h1>Não encontrado!</h1>}

      {questions.data?.map((question) => (
        <>
          <S.QuestionHeader>
            <S.AvatarImg
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
            <S.QuestionHeaderText>
              <S.QuestionHeaderName>{question.user.name}</S.QuestionHeaderName>
            </S.QuestionHeaderText>
          </S.QuestionHeader>
          <S.QuestionTitle>Pergunta</S.QuestionTitle>
          <S.QuestionDescription>{question.question}</S.QuestionDescription>
          {question.replies.length
            ? question.replies.map((answer) => (
                <S.Answer>
                  <S.AnswerIcon
                    src="https://img.icons8.com/color/48/000000/checkmark.png"
                    alt="answer"
                  />
                  <S.AnswerText>
                    <S.AnswerTitle>Resposta</S.AnswerTitle>
                    <S.AnswerDescription>{answer}</S.AnswerDescription>
                  </S.AnswerText>
                </S.Answer>
              ))
            : jobOwnerId === user!.id && (
                <Answer
                  questionId={question.id}
                  refetchQuestions={questions.refetch}
                />
              )}
        </>
      ))}
    </S.Wrapper>
  );
}
