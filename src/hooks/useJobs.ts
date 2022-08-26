import { useQuery } from "@apollo/client";
import { addDays } from "date-fns";

import { GET_JOBS, Job } from "@/services/graphql/jobs";
import { toJob } from "@/utils";

const currentDate = addDays(new Date(), 2);

export function useJobs() {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs: Job[] }>(GET_JOBS, {
    variables: { gte: currentDate },
    displayName: "jobs",
  });

  const data = rawData?.jobs.map((job) => toJob(job));

  return { data, isLoading: loading, error };
}
