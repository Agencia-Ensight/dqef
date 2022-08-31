import { addDays } from "date-fns";

import {
  JobGenericProps,
  JobMediaProps,
  JobProposal,
  JobProps,
  JobRating,
  JobStatus,
} from "@/types/Job";
import { PROD_API_URL } from "@/services/api";

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
      link: `${PROD_API_URL}${media.link}`,
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
      status: {
        id: prop.proposal_status.id as Number,
        name: prop.proposal_status.name as string,
      },
    }));
  }

  return {
    id: dbJob.id,
    title: dbJob.title,
    theme: dbJob.thema,
    mediaType: toJobGeneric(dbJob.job_media_types),
    pages: dbJob.pages,
    words: dbJob.words,
    obs: dbJob.obs,
    creatorId: dbJob.user_id,
    maximumPlagiarism: dbJob.maximum_plagiarism,
    instructions: dbJob.instructions,
    medias: toJobMedias(dbJob.job_has_medias || []),
    price: dbJob.value_pay,
    deliveryAt: addDays(new Date(dbJob.delivery), 1),
    jobType: toJobGeneric(dbJob.job_type),
    higherCourse: toJobGeneric(dbJob.higher_course),
    knowledges: toJobKnowledges(dbJob.job_has_knowledges),
    format: toJobGeneric(dbJob.job_format),
    dateLimit: addDays(new Date(dbJob.date_limit), 1),
    status: toJobStatus(dbJob.job_status.id),
    proposals: toJobProposals(dbJob.proposals),
    editorId: dbJob.editor_id,
    rating: dbJob?.user_ratings[0],
  };
}
