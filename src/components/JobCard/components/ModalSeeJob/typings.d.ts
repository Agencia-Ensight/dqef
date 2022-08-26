import { JobMediaProps } from "@/types/Job";

export type IModalOpenWork = {
  jobId: string;
  isFirstDelivery: boolean;
  dateOfChanges?: Date;
  obs?: string;
  medias: JobMediaProps[];
};
