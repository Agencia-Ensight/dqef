import { useQuery } from "@apollo/client";

import { Question, QUESTIONS_BY_JOB } from "@/services/graphql/faq";
import { useCallback } from "react";

type IQuestion = {
  id: string;
  question: string;
  user: {
    avatar: string;
    name: string;
  };
  replies: string[];
};

function toQuestion(data: Record<string, any>): IQuestion {
  return {
    id: data.id,
    question: data.question,
    user: {
      avatar: data.user.avatar,
      name: data.user.name,
    },
    replies: data.user_job_question_replies.map(
      (reply: Record<string, any>) => reply.question
    ),
  };
}

export function useJobQuestions(jobId: string) {
  const {
    data: rawData,
    loading: isLoading,
    error,
    refetch: refetchData,
  } = useQuery<{ user_job_questions: Question[] }>(QUESTIONS_BY_JOB, {
    variables: { job: jobId },
  });

  const data = rawData?.user_job_questions.map(toQuestion);

  const refetch = useCallback(async () => {
    await refetchData();
  }, [refetchData]);

  return { data, isLoading, error, refetch };
}
