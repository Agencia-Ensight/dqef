export type JobGenericProps = {
  id: string;
  name: string;
};

export type JobMediaProps = {
  id: string;
  link: string;
  title: string;
};

export type JobStatus =
  | "waiting-proposals"
  | "ready-to-start"
  | "in-progress"
  | "partial-delivery"
  | "final-delivery";

export type JobUserProposal = {
  id: string;
  name: string;
  avatar: string;
};

export type JobProposal = {
  id: string;
  user: JobUserProposal;
  status: JobGenericProps;
};

export type JobRating = {
  rating: number;
  testimonial?: string;
};

export type JobProps = {
  id: string;
  title: string;
  theme: string;
  typeOfWork: JobGenericProps;
  pages: number;
  words: number;
  obs: string;
  maximumPlagiarism: string;
  instructions: string;
  medias: JobMediaProps[];
  price: number;
  creatorId: string;
  editorId?: string;
  deliveryAt: Date;
  jobType: JobGenericProps;
  higherCourse: JobGenericProps;
  knowledges: JobGenericProps[];
  format: JobGenericProps;
  dateLimit: Date;
  status: JobStatus;
  medias: JobMediaProps[];
  proposals: JobProposal[];
  rating?: JobRating;
};
