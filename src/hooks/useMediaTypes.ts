import { useQuery } from "@apollo/client";

import { GET_MEDIA_TYPES } from "@/services/graphql/queries";
import { toEnum } from "@/utils";

export function useMediaTypes() {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ media_types: Record<string, any>[] }>(GET_MEDIA_TYPES);

  const data = rawData?.media_types.map(toEnum);

  return { data, isLoading, error };
}
