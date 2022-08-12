import { JobGenericProps, JobMediaProps, JobProps } from "@/types/Job";

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
    return dbJob.map(({ knowledge }: Record<string, any>) => ({
      id: knowledge.id,
      name: knowledge.name,
    }));
  }

  return {
    id: dbJob.id,
    title: dbJob.title,
    discipline: dbJob.discipline, // TODO: Onde encontrar isso no Hasura?
    theme: dbJob.thema,
    typeOfWork: toJobGeneric(dbJob.job_type),
    pages: dbJob.pages,
    words: dbJob.words,
    obs: dbJob.obs,
    maximumPlagiarism: dbJob.maximum_plagiarism,
    instructions: dbJob.instructions,
    medias: toJobMedias(dbJob.medias),
    price: dbJob.value_pay,
    deliveryAt: new Date(dbJob.delivery),
    jobType: toJobGeneric(dbJob.job_type),
    higherCourse: toJobGeneric(dbJob.higher_course),
    knowledges: toJobKnowledges(dbJob.job_has_knowledges),
    format: toJobGeneric(dbJob.job_format),
    dateLimit: new Date(dbJob.delivery),
    status: toJobGeneric(dbJob.job_status),
  };
}
