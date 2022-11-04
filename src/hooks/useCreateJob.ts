import { useState } from "react";
import { useMutation,  } from "@apollo/client";

import { INSERT_JOB } from "@/services/graphql/jobs";
import { uploadFile } from "@/services/api/upload";
import { useJobNotificationsDeadline } from "./useJobNotificationsDeadline";

type ICreateJob = {
  courseId: string;
  typeId: number;
  title: string;
  price: number;
  editorPrice: number;
  dateLimit: Date;
  deliveryAt: Date;
  theme: string;
  knowledgeId: number;
  userId: string;
  pages: number;
  words: number;
  instructions: string;
  formatId: number;
  obs: string;
  maxPlagiarism: number;
  mediaTypeId: number;
  files: File[];
};

export function useCreateJob() {
  const [isLoading, setIsLoading] = useState(false);
  const [insertJob, { data, error }] = useMutation(INSERT_JOB);
  const {getResolutionDay} = useJobNotificationsDeadline()

  async function createJob(data: ICreateJob) {
    setIsLoading(true);
    const mediaIds = [];

    for (const file of data.files) {
      const { id } = await uploadFile({ file, title: file.name });
      mediaIds.push({ media_id: id });
    }

    const notificationDeadlineId = await getResolutionDay(data.deliveryAt);


    try {
      await insertJob({
        variables: {
          higher_course_id: data.courseId,
          job_status_id: 1,
          job_type_id: 1,
          title: data.title,
          value: data.price,
          value_pay: data.editorPrice,
          date_limit: data.dateLimit,
          delivery: data.deliveryAt,
          thema: data.theme,
          knowledge_id: data.knowledgeId,
          user_id: data.userId,
          pages: data.pages,
          words: data.words,
          instructions: data.instructions,
          job_format_id: data.formatId,
          obs: data.obs,
          maximum_plagiarism: data.maxPlagiarism,
          job_media_type_id: data.mediaTypeId,
          job_medias: mediaIds,
          notification_deadline_id: notificationDeadlineId
        },
      });
    } catch {}

    setIsLoading(false);
  }

  return { createJob, isLoading, data, error };
}
