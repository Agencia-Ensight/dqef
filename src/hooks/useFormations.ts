import { useQuery } from "@apollo/client";

import { GET_FORMATIONS } from "@/services/graphql/queries";
import { toEnum } from "@/utils";

export function useFormations() {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ formations: Record<string, any>[] }>(GET_FORMATIONS);

  const data = rawData?.formations.map(toEnum);

  return { data, isLoading, error };
}
