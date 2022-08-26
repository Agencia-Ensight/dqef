import { useMutation } from "@apollo/client";

import {
  GET_JOB,
  GET_JOBS,
  GET_JOBS_BY_EDITOR,
  GET_JOBS_BY_USER,
  GET_PROPOSALS_BY_JOB,
  GET_TOP_10_JOBS,
  GET_TOP_10_URGENT_JOBS,
  GET_URGENT_JOBS,
  INSERT_JOB_REVIEW,
} from "@/services/graphql/jobs";
import { useUser } from "@/contexts";

type IReview = {
  jobId: string;
  editorId: string;
  review: 1 | 2 | 3 | 4 | 5;
  testimonial?: string;
};

export function useReview() {
  const { user } = useUser();
  const [insertReview, { data, loading, error }] =
    useMutation(INSERT_JOB_REVIEW);

  async function sendReview({ jobId, review, testimonial, editorId }: IReview) {
    await insertReview({
      variables: {
        jobId,
        review,
        testimonial,
        userId: editorId,
        reviwerId: user?.id,
      },
      refetchQueries: [
        GET_JOBS,
        GET_URGENT_JOBS,
        GET_JOBS_BY_USER,
        GET_JOBS_BY_EDITOR,
        GET_JOB,
        GET_PROPOSALS_BY_JOB,
        GET_TOP_10_JOBS,
        GET_TOP_10_URGENT_JOBS,
      ],
    });
  }

  return { sendReview, data, isLoading: loading, error };
}
