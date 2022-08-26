import { useMutation } from "@apollo/client";

import { CardStatus } from "@/components/JobCard/typings";
import { INSERT_DELIVERY } from "@/services/graphql/jobs";

export const statusOnDb = {
  "waiting-proposals": 1,
  "ready-to-start": 2,
  "in-progress": 3,
  "partial-delivery": 4,
  "final-delivery": 5,
};

export function useJobDelivery() {
  const [insert, { data, loading, error }] = useMutation(INSERT_DELIVERY, {
    refetchQueries: ["jobs", "urgent-jobs"],
  });

  async function delivery(
    jobId: string,
    status: CardStatus,
    mediaIds: string[] = []
  ) {
    await insert({
      variables: {
        jobId,
        statusId: statusOnDb[status],
        medias: mediaIds.map((mediaId) => ({
          job_id: jobId,
          media_id: mediaId,
        })),
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

  return { delivery, data, isLoading: loading, error };
}
