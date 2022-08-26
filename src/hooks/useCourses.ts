import { useQuery } from "@apollo/client";

import { GET_COURSES } from "@/services/graphql/queries";
import { toEnum } from "@/utils";

export function useCourses() {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ higher_courses: Record<string, any>[] }>(GET_COURSES);

  const data = rawData?.higher_courses.map(toEnum);

  return { data, isLoading, error };
}
