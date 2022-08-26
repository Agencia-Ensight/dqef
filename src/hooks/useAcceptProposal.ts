import { useMutation } from "@apollo/client";

import {
  ACCEPT_PROPOSAL,
  GET_JOB,
  GET_JOBS,
  GET_JOBS_BY_EDITOR,
  GET_JOBS_BY_USER,
  GET_PROPOSALS_BY_JOB,
  GET_TOP_10_JOBS,
  GET_TOP_10_URGENT_JOBS,
  GET_URGENT_JOBS,
} from "@/services/graphql/jobs";

export function useAcceptProposal() {
  const [update, { data, loading, error }] = useMutation(ACCEPT_PROPOSAL);

  async function acceptProposal(
    proposalId: string,
    jobId: string,
    editorId: string
  ) {
    await update({
      variables: {
        proposalId,
        jobId,
        editorId,
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

  return { acceptProposal, data, isLoading: loading, error };
}
