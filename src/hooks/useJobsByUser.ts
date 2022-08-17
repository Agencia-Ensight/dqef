import { useQuery } from "@apollo/client";

import { GET_JOBS_BY_EDITOR, GET_JOBS_BY_USER } from "@/services/graphql/jobs";
import { toJob } from "@/utils";
import { statusOnDb } from "./useJobDelivery";

export type JobStatus =
  | "waiting-proposals"
  | "ready-to-start"
  | "in-progress"
  | "partial-delivery"
  | "final-delivery";

export function useJobsByUser(
  userId: string,
  userType: "STUDENT" | "EDITOR",
  status: JobStatus
) {
  if (userType === "STUDENT") {
    const {
      data: rawData,
      loading,
      error,
    } = useQuery<{ jobs: Record<string, any>[] }>(GET_JOBS_BY_USER, {
      variables: { userId, statusId: status ? statusOnDb[status] : undefined },
    });

    const data = rawData?.jobs.map(toJob);

    return { data, isLoading: loading, error };
  }

  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs: Record<string, any>[] }>(GET_JOBS_BY_EDITOR, {
    variables: {
      editorId: userId,
      statusId: status ? statusOnDb[status] : undefined,
    },
  });

  const data = rawData?.jobs.map(toJob);

  return { data, isLoading: loading, error };
}
