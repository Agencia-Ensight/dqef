import { useQuery } from "@apollo/client";

import { toEnum } from "@/utils";
import { GET_FORMATS } from "@/services/graphql/queries";

export function useJobFormats() {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery<{ job_formats: Record<string, any>[] }>(GET_FORMATS);

  const data = rawData?.job_formats.map(toEnum);

  return { data, isLoading: loading, error };
}
