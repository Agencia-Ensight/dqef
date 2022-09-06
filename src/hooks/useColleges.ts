import { useQuery } from "@apollo/client";

import { GET_COLLEGES } from "@/services/graphql/queries";

type ICollege = {
  id: number;
  name: string;
};

function toCollege(data: Record<string, any>): ICollege {
  return {
    id: data.id,
    name: `${data.sigla} - ${data.name}`,
  };
}

export function useColleges() {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ colleges: Record<string, any>[] }>(GET_COLLEGES);

  const data = rawData?.colleges.map(toCollege);

  return { data, isLoading, error };
}
