import { useQuery } from "@apollo/client";

import { GET_KNOWLEDGES_BY_COURSE_ID } from "@/services/graphql/queries";
import { toEnum } from "@/utils";

export function useKnowledgesByCourse(courseId: number) {
  const {
    data: rawData,
    loading: isLoading,
    error,
  } = useQuery<{ knowledges: Record<string, any>[] }>(
    GET_KNOWLEDGES_BY_COURSE_ID,
    {
      variables: {
        higher_course_id: courseId,
      },
    }
  );

  const data = rawData?.knowledges.map(toEnum);

  return { data, isLoading, error };
}
