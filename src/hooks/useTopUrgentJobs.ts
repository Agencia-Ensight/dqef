import { useQuery } from "@apollo/client";
import { addDays } from "date-fns";

import { GET_TOP_10_URGENT_JOBS, Job } from "@/services/graphql/jobs";
import { toJob } from "@/utils";

const currentDate = new Date();
const nextTwoDays = addDays(currentDate, 2);

export function useTopUrgentJobs() {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs: Job[] }>(GET_TOP_10_URGENT_JOBS, {
    variables: {
      gte: currentDate,
      lte: nextTwoDays,
    },
    pollInterval: 10000,
  });

  const data = rawData?.jobs.map((job) => toJob(job));

  return { data, isLoading: loading, error };
}
