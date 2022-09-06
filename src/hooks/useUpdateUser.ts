import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import { UPDATE_USER } from "@/services/graphql/user";

type IUpdateUser = {
  collegeId: number;
  formationId: number;
  courseId: number;
  knowledgeId: number;
};

export function useUpdateUser(userId: string) {
  const [update, { data, loading: isLoading, error }] =
    useMutation(UPDATE_USER);

  const updateUser = useCallback(
    async (data: IUpdateUser) => {
      await update({
        variables: { userId, ...data },
      });
    },
    [update]
  );

  return { updateUser, data, isLoading, error };
}
