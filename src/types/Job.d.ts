export type JobGenericProps = {
  id: string;
  name: string;
};

export type JobMediaProps = {
  id: string;
  link: string;
  title: string;
};

export type JobProps = {
  id: string;
  title: string;
  discipline: JobGenericProps;
  theme: string;
  typeOfWork: JobGenericProps;
  pages: number;
  words: number;
  obs: string;
  maximumPlagiarism: string;
  instructions: string;
  medias: JobMediaProps[];
  price: number;
  deliveryAt: Date;
  jobType: JobGenericProps;
  higherCourse: JobGenericProps;
  knowledges: JobGenericProps[];
  format: JobGenericProps;
  dateLimit: Date;
  status: JobGenericProps;
  medias: JobMediaProps[];
};
