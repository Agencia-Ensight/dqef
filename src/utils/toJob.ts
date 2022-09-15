import { addDays, addHours } from "date-fns";

import {
  JobChange,
  JobCharge,
  JobGenericProps,
  JobMediaProps,
  JobProposal,
  JobProps,
  JobRating,
  JobStatus,
} from "@/types/Job";
import { PROD_API_URL } from "@/services/api";

export const statusOnDb = {
  1: "PUBLISHED",
  2: "ACCEPTED_EDITOR",
  3: "IN_PROGRESS",
  4: "FIRST_DELIVERY",
  5: "REQUEST_CHANGE",
  6: "FINAL_DELIVERY",
  7: "FINISHED",
} as Record<number, JobStatus>;

export const statusOnDbReverse = {
  PUBLISHED: 1,
  ACCEPTED_EDITOR: 2,
  IN_PROGRESS: 3,
  FIRST_DELIVERY: 4,
  REQUEST_CHANGE: 5,
  FINAL_DELIVERY: 6,
  FINISHED: 7,
} as Record<JobStatus, number>;

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
    return statusOnDb[dbStatus];
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

  function toJobChange(dbChange: Record<string, any>): JobChange | undefined {
    if (!dbChange) return undefined;
    return {
      obs: dbChange.obs,
      medias: toJobMedias(dbChange.job_alteration_has_medias),
    };
  }

  function toDelivery(dbChange: Record<string, any>): JobChange | undefined {
    if (!dbChange) return undefined;
    return {
      obs: dbChange.obs,
      medias: toJobMedias(dbChange.delivery_has_medias),
    };
  }

  function toCharge(
    dbCharge: Record<string, any>,
    deliveryAt: Date
  ): JobCharge | undefined {
    const charges = dbCharge[0] && dbCharge[0].notification_deadline;
    if (!charges) return;

    function toNextDay(chargeDay: number) {
      return chargeDay === 0 ? undefined : addDays(deliveryAt, chargeDay);
    }

    return {
      dayOne: toNextDay(charges.charge_day_1),
      dayTwo: toNextDay(charges.charge_day_2),
      dayThree: toNextDay(charges.charge_day_3),
    };
  }

  const deliveryAt = addHours(
    addDays(new Date(dbJob.delivery), 1),
    dbJob.request_time ? 3 : 0
  );

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
    price: dbJob.value,
    editorPrice: dbJob.value_pay,
    deliveryAt,
    jobType: toJobGeneric(dbJob.job_type),
    higherCourse: toJobGeneric(dbJob.higher_course),
    knowledges: toJobKnowledges(dbJob.job_has_knowledges),
    format: toJobGeneric(dbJob.job_format),
    dateLimit: addDays(new Date(dbJob.date_limit), 1),
    status: toJobStatus(dbJob.job_status.id),
    proposals: toJobProposals(dbJob.proposals),
    editorId: dbJob.editor_id,
    rating: dbJob?.user_ratings[0],
    delivery: toDelivery(dbJob.deliveries && dbJob.deliveries[0]),
    change: toJobChange(
      dbJob.job_alterations &&
        dbJob.job_alterations[dbJob.job_alterations.length - 1]
    ),
    charges: toCharge(
      dbJob.notification_automations,
      new Date(dbJob.created_at)
    ),
  };
}
