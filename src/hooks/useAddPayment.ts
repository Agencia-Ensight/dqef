import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import { ADD_JOB_PAYMENT } from "@/services/graphql/jobs";
import { useUser } from "@/contexts";

type IAddPayment = {
  jobId: string;
  mediaId: string;
};

export function useAddPayment() {
  const [add, { data, loading: isLoading, error }] =
    useMutation(ADD_JOB_PAYMENT);
  const { user } = useUser();

  const addPayment = useCallback(
    async (data: IAddPayment) => {
      await add({
        variables: {
          jobId: data.jobId,
          mediaId: data.mediaId,
          paymentMethodId: 2,
          userId: user!.id,
        },
      });
    },
    [add, user]
  );

  return {
    addPayment,
    data,
    isLoading,
    error,
  };
}
