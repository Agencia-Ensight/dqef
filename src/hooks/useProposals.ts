import { useQuery } from "@apollo/client";

import { GET_PROPOSALS_BY_JOB } from "@/services/graphql/jobs";
import { toProposal } from "@/utils";
import { ProposalProps } from "@/types/Proposal";

export function useProposals(jobId: string) {
  const {
    data: rawData,
    loading,
    error,
  } = useQuery(GET_PROPOSALS_BY_JOB, { variables: { jobId } });

  const data = rawData?.proposals.map((proposal: Record<string, any>) =>
    toProposal(proposal)
  ) as ProposalProps[] | undefined;

  return { data, isLoading: loading, error };
}
