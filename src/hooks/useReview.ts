import { useMutation } from "@apollo/client";

import { INSERT_JOB_REVIEW } from "@/services/graphql/jobs";
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
        "jobs",
        "urgent-jobs",
        "jobs-by-user",
        `job-${jobId}`,
        "proposals",
        "top-jobs",
        "top-urgent-jobs",
      ],
    });
  }

  return { sendReview, data, isLoading: loading, error };
}
