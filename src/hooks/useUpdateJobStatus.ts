import {
  UPDATE_JOB_STATUS,
  GET_JOBS,
  GET_URGENT_JOBS,
  GET_JOBS_BY_USER,
  GET_JOBS_BY_EDITOR,
  GET_JOB,
  GET_PROPOSALS_BY_JOB,
  GET_TOP_10_JOBS,
  GET_TOP_10_URGENT_JOBS,
} from "@/services/graphql/jobs";
import { JobStatus } from "@/types/Job";
import { statusOnDbReverse } from "@/utils";
import { useMutation } from "@apollo/client";

export function useUpdateJobStatus() {
  const [update, { data, loading, error }] = useMutation(UPDATE_JOB_STATUS);

  async function updateJobStatus(jobId: string, status: JobStatus) {
    await update({
      variables: {
        jobId,
        statusId: statusOnDbReverse[status],
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

  return { updateJobStatus, data, isLoading: loading, error };
}
