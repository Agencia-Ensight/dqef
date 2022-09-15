import { useState } from "react";
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
  INSERT_JOB_CHANGE,
} from "@/services/graphql/jobs";

type CreateChangeProps = {
  mediaIds: string[];
  obs: string;
  isEditor?: boolean;
};

export function useCreateChange(jobId: string) {
  const [isLoading, setIsLoading] = useState(false);

  const [update, { data, error }] = useMutation(INSERT_JOB_CHANGE);

  async function createChange({
    obs,
    mediaIds,
    isEditor = false,
  }: CreateChangeProps) {
    setIsLoading(true);

    try {
      await update({
        variables: {
          jobId,
          obs,
          medias: mediaIds.map((mediaId) => ({ media_id: mediaId })),
          jobStatus: isEditor ? 6 : 5,
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
    } catch (err) {}

    setIsLoading(false);
  }

  return { createChange, data, error, isLoading };
}
