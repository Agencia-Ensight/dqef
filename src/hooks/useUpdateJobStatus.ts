import { CardStatus } from "@/components/JobCard/typings";
import { UPDATE_JOB_STATUS } from "@/services/graphql/jobs";
import { useMutation } from "@apollo/client";

export const statusOnDb = {
  "waiting-proposals": 1,
  "ready-to-start": 2,
  "in-progress": 3,
  "partial-delivery": 4,
  "final-delivery": 5,
};

export function useUpdateJobStatus() {
  const [update, { loading, error }] = useMutation(UPDATE_JOB_STATUS);

  async function updateJobStatus(jobId: string, status: CardStatus) {
    await update({ variables: { jobId, statusId: statusOnDb[status] } });
  }

  return { updateJobStatus, isLoading: loading, error };
}
