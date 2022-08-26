import { useMutation } from "@apollo/client";

import { SEND_PROPOSAL } from "@/services/graphql/jobs";

type ISendProposal = {
  jobId: string;
  userId: string;
  price: number;
  status: "send" | "accept" | "reject";
};

const dbStatus = {
  send: 1,
  accept: 2,
  reject: 3,
};

export function useSendProposal() {
  const [insert, { data, loading, error }] = useMutation(SEND_PROPOSAL);

  async function sendProposal({ jobId, userId, price, status }: ISendProposal) {
    await insert({
      variables: { jobId, statusId: dbStatus[status], userId, price },
      refetchQueries: [
        "jobs",
        "urgent-jobs",
        "jobs-by-user",
        `job-${jobId}`,
        "proposals",
        "top-jobs",
        "top-urgent-jobs",
      ],
    });
  }

  return { sendProposal, data, isLoading: loading, error };
}
