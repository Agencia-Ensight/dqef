import { useCallback } from "react";

import { useUser } from "@/contexts";

import { INSERT_ANSWER } from "@/services/graphql/faq";
import { useMutation } from "@apollo/client";

type IAddAnswer = {
  answer: string;
  questionId: string;
};

export function useAnswerJobQuestion() {
  const [add, { data, loading: isLoading, error }] = useMutation(INSERT_ANSWER);
  const { user } = useUser();

  const addAnswer = useCallback(
    async ({ answer, questionId }: IAddAnswer) => {
      await add({
        variables: {
          answer,
          userJobQuestionId: questionId,
          userId: user!.id,
        },
      });
    },
    [add]
  );

  return { addAnswer, data, isLoading, error };
}
