import { useMutation } from "@apollo/client";

import { CardStatus } from "@/components/JobCard/typings";
import {
  GET_JOB,
  GET_JOBS,
  GET_JOBS_BY_EDITOR,
  GET_JOBS_BY_USER,
  GET_PROPOSALS_BY_JOB,
  GET_TOP_10_JOBS,
  GET_TOP_10_URGENT_JOBS,
  GET_URGENT_JOBS,
  INSERT_DELIVERY,
} from "@/services/graphql/jobs";

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

  return { delivery, data, isLoading: loading, error };
}
