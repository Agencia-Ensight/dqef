import { useQuery } from "@apollo/client";

import { GET_URGENT_JOBS, Job } from "@/services/graphql/jobs";
import { toJob } from "@/utils";

export function useUrgentJobs() {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs: Job[] }>(GET_URGENT_JOBS, {
    displayName: "urgent-jobs",
  });

  const data = rawData?.jobs.map((job) => toJob(job));

  return { data, isLoading: loading, error };
}
