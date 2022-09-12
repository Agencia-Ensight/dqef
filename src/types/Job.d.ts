export type JobGenericProps = {
  id: number;
  name: string;
};

export type JobMediaProps = {
  id: string;
  link: string;
  title: string;
};

export type JobUserProposal = {
  id: string;
  name: string;
  avatar: string;
};

export type JobProposal = {
  id: string;
  user: JobUserProposal;
  status: { id: number; name: string };
};

export type JobRating = {
  rating: number;
  testimonial?: string;
};

export type JobChange = {
  obs: string;
  medias: JobMediaProps[];
};

export type JobProps = {
  id: string;
  title: string;
  theme: string;
  mediaType: JobGenericProps;
  pages: number;
  words: number;
  obs: string;
  maximumPlagiarism: string;
  instructions: string;
  price: number;
  editorPrice: number;
  creatorId: string;
  editorId?: string;
  deliveryAt: Date;
  dateLimit: Date;
  jobType: JobGenericProps;
  higherCourse: JobGenericProps;
  knowledges: JobGenericProps[];
  format: JobGenericProps;
  status: JobStatus;
  medias: JobMediaProps[];
  change?: JobChange;
  proposals: JobProposal[];
  rating?: JobRating;
};

export type JobStatus =
  | "PUBLISHED"
  | "ACCEPTED_EDITOR"
  | "IN_PROGRESS"
  | "FIRST_DELIVERY"
  | "REQUEST_CHANGE"
  | "FINAL_DELIVERY"
  | "FINISHED";
