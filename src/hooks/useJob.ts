import { useQuery } from "@apollo/client";

import { GET_JOB } from "@/services/graphql/jobs";
import { toJob } from "@/utils";

export function useJob(id: string) {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery(GET_JOB, { variables: { id }, displayName: `job-${id}` });

  const data = rawData?.jobs_by_pk ? toJob(rawData.jobs_by_pk) : undefined;

  return { data, isLoading: loading, error };
}
