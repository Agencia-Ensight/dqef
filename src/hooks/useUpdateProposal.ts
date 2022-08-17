import { useMutation } from "@apollo/client";

import { UPDATE_PROPOSAL } from "@/services/graphql/jobs";

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
    });
  }

  return { updateProposal, data, isLoading: loading, error };
}
