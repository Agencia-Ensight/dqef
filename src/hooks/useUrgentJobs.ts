import { useQuery } from "@apollo/client";
import { addDays, startOfDay } from "date-fns";

import { GET_URGENT_JOBS, Job } from "@/services/graphql/jobs";
import { toJob } from "@/utils";

const currentDate = startOfDay(new Date());
const nextTwoDays = addDays(currentDate, 2);

export function useUrgentJobs() {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs: Job[] }>(GET_URGENT_JOBS, {
    variables: {
      gte: currentDate,
      lte: nextTwoDays,
    },
    pollInterval: 10000,
  });

  const data = rawData?.jobs.map((job) => toJob(job));

  return { data, isLoading: loading, error };
}
