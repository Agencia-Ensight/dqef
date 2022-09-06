import { useMutation } from "@apollo/client";
import { useCallback } from "react";

import { INSERT_QUESTION } from "@/services/graphql/faq";
import { useUser } from "@/contexts";

export function useAddJobQuestion(jobId: string) {
  const [add, { data, loading: isLoading, error }] =
    useMutation(INSERT_QUESTION);
  const { user } = useUser();

  const addQuestion = useCallback(
    async (question: string) => {
      await add({
        variables: {
          question,
          jobId,
          userId: user!.id,
        },
      });
    },
    [add]
  );

  return { addQuestion, data, isLoading, error };
}
