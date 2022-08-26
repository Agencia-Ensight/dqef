import { useQuery } from "@apollo/client";
import { addDays } from "date-fns";

import { GET_TOP_10_JOBS, Job } from "@/services/graphql/jobs";
import { toJob } from "@/utils";

const currentDate = addDays(new Date(), 2);

export function useTopJobs() {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs: Job[] }>(GET_TOP_10_JOBS, {
    variables: {
      gte: currentDate,
    },
    pollInterval: 10000,
  });

  const data = rawData?.jobs.map((job) => toJob(job));

  return { data, isLoading: loading, error };
}
