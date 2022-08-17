import { useQuery } from "@apollo/client";

import { GET_JOBS, Job } from "@/services/graphql/jobs";
import { toJob } from "@/utils";

export function useJobs() {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs: Job[] }>(GET_JOBS, { displayName: "jobs" });

  const data = rawData?.jobs.map((job) => toJob(job));

  return { data, isLoading: loading, error };
}
