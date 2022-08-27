import { useQuery } from "@apollo/client";

import { GET_JOB } from "@/services/graphql/jobs";
import { toJob } from "@/utils";
import { JobProps } from "@/types/Job";

type IJobProps = {
  onCompleted?: (data: JobProps) => void;
};

export function useJob(id: string, { onCompleted = () => {} }: IJobProps = {}) {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ jobs_by_pk: Record<string, any> }>(GET_JOB, {
    variables: { id },
    pollInterval: 5000,
    onCompleted: (data) => onCompleted(toJob(data.jobs_by_pk)),
  });

  const data = rawData?.jobs_by_pk ? toJob(rawData.jobs_by_pk) : undefined;

  return { data, isLoading: loading, error };
}
