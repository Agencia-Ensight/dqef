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
  UPDATE_PROPOSAL,
} from "@/services/graphql/jobs";

export function useUpdateProposal() {
  const [update, { data, loading, error }] = useMutation(UPDATE_PROPOSAL);

  async function updateProposal(
    proposalId: string,
    status: "accept" | "reject"
  ) {
    await update({
      variables: {
        proposalId,
        statusId: status === "accept" ? 2 : 3,
      },
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

  return { updateProposal, data, isLoading: loading, error };
}
