import { useQuery } from "@apollo/client";

import { GET_COLLEGES } from "@/services/graphql/queries";
import { toEnum } from "@/utils";

export function useColleges() {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ colleges: Record<string, any>[] }>(GET_COLLEGES);

  const data = rawData?.colleges.map(toEnum);

  return { data, isLoading, error };
}
