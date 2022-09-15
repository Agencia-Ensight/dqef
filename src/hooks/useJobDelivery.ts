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
  INSERT_DELIVERY,
} from "@/services/graphql/jobs";

type DeliveryProps = {
  jobId: string;
  obs: string;
  mediaIds: string[];
};

export function useJobDelivery() {
  const [insert, { data, loading, error }] = useMutation(INSERT_DELIVERY);

  async function delivery({ jobId, obs, mediaIds = [] }: DeliveryProps) {
    await insert({
      variables: {
        jobId,
        medias: mediaIds.map((mediaId) => ({
          media_id: mediaId,
        })),
        obs,
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
