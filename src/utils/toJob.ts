import {
  JobGenericProps,
  JobMediaProps,
  JobProposal,
  JobProps,
  JobRating,
  JobStatus,
} from "@/types/Job";

export const statusOnDb = {
  1: "waiting-proposals",
  2: "ready-to-start",
  3: "in-progress",
  4: "partial-delivery",
  5: "final-delivery",
};

export function toJob(dbJob: Record<string, any>): JobProps {
  function toJobGeneric(dbJob: Record<string, any>): JobGenericProps {
    return {
      id: dbJob.id,
      name: dbJob.name,
    };
  }

  function toJobMedias(dbJob: Record<string, any>): JobMediaProps[] {
    return dbJob.map(({ media }: Record<string, any>) => ({
      id: media.id,
      link: media.link,
      title: media.title,
    }));
  }

  function toJobKnowledges(dbJob: Record<string, any>): JobGenericProps[] {
    return dbJob.map(({ knowledge }: Record<string, any>) =>
      toJobGeneric(knowledge)
    );
  }

  function toJobStatus(dbStatus: 1 | 2 | 3 | 4 | 5): JobStatus {
    return statusOnDb[dbStatus] as JobStatus;
  }

  function toJobProposals(dbProposal: Record<string, any>): JobProposal[] {
    return dbProposal.map((prop: Record<string, any>) => ({
      user: prop.user,
      status: toJobGeneric(prop.proposal_status),
    }));
  }

  const editorId = dbJob.proposals?.find(
    (proposal: Record<string, any>) => proposal.proposal_status.id === 2
  )?.user_id;

  return {
    id: dbJob.id,
    title: dbJob.title,
    theme: dbJob.thema,
    typeOfWork: toJobGeneric(dbJob.job_type),
    pages: dbJob.pages,
    words: dbJob.words,
    obs: dbJob.obs,
    creatorId: dbJob.user_id,
    maximumPlagiarism: dbJob.maximum_plagiarism,
    instructions: dbJob.instructions,
    medias: toJobMedias(dbJob.medias || []),
    price: dbJob.value_pay,
    deliveryAt: new Date(dbJob.delivery),
    jobType: toJobGeneric(dbJob.job_type),
    higherCourse: toJobGeneric(dbJob.higher_course),
    knowledges: toJobKnowledges(dbJob.job_has_knowledges),
    format: toJobGeneric(dbJob.job_format),
    dateLimit: new Date(dbJob.delivery),
    status: toJobStatus(dbJob.job_status.id),
    proposals: toJobProposals(dbJob.proposals),
    editorId,
    rating: dbJob?.user_ratings,
  };
}
