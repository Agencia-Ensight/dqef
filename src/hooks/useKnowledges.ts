import { useQuery } from "@apollo/client";

import { GET_KNOWLEDGES } from "@/services/graphql/queries";
import { toEnum } from "@/utils";

export function useKnowledges() {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ knowledges: Record<string, any>[] }>(GET_KNOWLEDGES);

  const data = rawData?.knowledges.map(toEnum);

  return { data, isLoading, error };
}
