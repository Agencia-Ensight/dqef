import { ProposalProps } from "@/types/Proposal";

export function toProposal(dbProposal: Record<string, any>): ProposalProps {
  return {
    id: dbProposal.id,
    job: {
      id: dbProposal.job.id,
    },
    user: {
      id: dbProposal.user.id,
      avatar: dbProposal.user.avatar,
      name: dbProposal.user.name,
      formation: dbProposal.user.formation.name,
      higherCourse: dbProposal.user.higher_course.name,
      avgRating:
        dbProposal.user.userRatingsByUserId_aggregate.aggregate.avg.rating || 5,
    },
    price: dbProposal.price,
    status: {
      id: dbProposal.proposal_status.id,
      name: dbProposal.proposal_status.name,
    },
  };
}