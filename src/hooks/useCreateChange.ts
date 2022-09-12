import { useState } from "react";
import { useMutation } from "@apollo/client";

import { uploadFile } from "@/services/api/upload";
import { INSERT_JOB_CHANGE } from "@/services/graphql/jobs";

type CreateChangeProps = {
  media: File;
  obs: string;
};

export function useCreateChange(jobId: string) {
  const [isLoading, setIsLoading] = useState(false);

  const [update, { data, error }] = useMutation(INSERT_JOB_CHANGE);

  async function createChange({ obs, media }: CreateChangeProps) {
    setIsLoading(true);

    const { id } = await uploadFile({ file: media, title: media.name });

    try {
      await update({
        variables: {
          jobId,
          obs,
          mediaId: id,
        },
      });
    } catch (err) {}

    setIsLoading(false);
  }

  return { createChange, data, error, isLoading };
}
