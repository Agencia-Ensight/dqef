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
  UPDATE_JOB,
} from "@/services/graphql/jobs";
import { JobProps } from "@/types/Job";
import { useState } from "react";
import { uploadFile } from "@/services/api/upload";
import { statusOnDbReverse } from "@/utils";

type IUseUpdateJob = Omit<
  Partial<JobProps>,
  | "id"
  | "format"
  | "higherCourse"
  | "jobType"
  | "knowledges"
  | "mediaType"
  | "medias"
> & {
  editorPrice: number;
  formatId: number;
  courseId: number;
  knowledgeIds: number[];
  mediaTypeId: number;
  mediasToBeAdded: File[];
  mediaIdsTobeDeleted: string[];
};

export function useUpdateJob(id: string) {
  const [isLoading, setIsLoading] = useState(false);

  const [update, { data, error }] = useMutation(UPDATE_JOB, {
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

  async function updateJob({ knowledgeIds = [], ...props }: IUseUpdateJob) {
    setIsLoading(true);

    try {
      const mediaIdsTobeAdded = [];

      for (const media of props.mediasToBeAdded) {
        const newMedia = await uploadFile({ file: media, title: media.name });
        mediaIdsTobeAdded.push(newMedia);
      }

      await update({
        variables: {
          id,
          object: {
            date_limit: props.dateLimit,
            delivery: props.deliveryAt,
            higher_course_id: props.courseId,
            instructions: props.instructions,
            job_format_id: props.formatId,
            job_media_type_id: props.mediaTypeId,
            max_pages: props.pages,
            maximum_plagiarism: props.maximumPlagiarism,
            obs: props.obs,
            pages: props.pages,
            thema: props.theme,
            title: props.title,
            value: props.price,
            value_pay: props.editorPrice,
            words: props.words,
            ...(props.status && {
              job_status_id: statusOnDbReverse[props.status],
            }),
          },
          knowledges: knowledgeIds.map((knowledgeId) => ({
            job_id: id,
            knowledge_id: knowledgeId,
          })),
          deleteMedias: props.mediaIdsTobeDeleted,
          addMedias: mediaIdsTobeAdded.map((media) => ({
            job_id: id,
            media_id: media.id,
          })),
        },
      });
    } catch (err) {}

    setIsLoading(false);
  }

  return { updateJob, data, isLoading, error };
}
