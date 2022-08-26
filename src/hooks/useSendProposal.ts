import { useMutation } from "@apollo/client";

import {
  GET_JOB,
  GET_JOBS,
  GET_JOBS_BY_EDITOR,
  GET_JOBS_BY_USER,
  GET_PROPOSALS_BY_JOB,
  GET_TOP_10_JOBS,
  GET_TOP_10_URGENT_JOBS,
  GET_URGENT_JOBS,
  SEND_PROPOSAL,
} from "@/services/graphql/jobs";

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
        GET_JOBS,
        GET_URGENT_JOBS,
        GET_JOBS_BY_USER,
        GET_JOBS_BY_EDITOR,
        GET_JOB,
        GET_PROPOSALS_BY_JOB,
        GET_TOP_10_JOBS,
        GET_TOP_10_URGENT_JOBS,
      ],
    });
  }

  return { sendProposal, data, isLoading: loading, error };
}
