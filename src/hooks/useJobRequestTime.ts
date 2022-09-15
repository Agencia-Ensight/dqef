import { useMutation } from "@apollo/client";

import { INSERT_JOB_REQUEST_TIME } from "@/services/graphql/jobs";

export function useJobRequestTime(jobId: string) {
  const [update, { data, loading: isLoading, error }] = useMutation(
    INSERT_JOB_REQUEST_TIME
  );

  async function requestMoreTime() {
    await update({
      variables: {
        jobId,
      },
    });
  }

  return { requestMoreTime, isLoading, error };
}
