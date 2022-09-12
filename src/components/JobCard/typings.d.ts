import {
  JobChange,
  JobMediaProps,
  JobProposal,
  JobRating,
  JobStatus,
} from "@/types/Job";

export type CourseVariant =
  | "DIREITO"
  | "ENG-CIVIL"
  | "PEDAGOGIA"
  | "NUTRICAO"
  | "MEDICINA"
  | "ARQUITETURA"
  | "ECONOMIA"
  | "ADM"
  | "PSICOLOGIA"
  | string;

export type CardProps = {
  /**
   * @default DIREITO
   */
  course?: CourseVariant;
  /**
   *
   * @default false
   */
  urgent?: boolean;
};

export type ICardProps = CardProps & {
  id: string;
  title: string;
  theme: string;
  mediaType: string;
  obs?: string;
  price: number;
  deliveryAt: Date;
  status: JobStatus;
  creatorId: string;
  rating?: JobRating;
  totalProposals: number;
  proposals: JobProposal[];
  editorId?: string;
  totalChanges: number;
  wasEvaluated: boolean;
  dateLimit: Date;
  knowledges: string[];
  medias: JobMediaProps[];
  change?: JobChange;
};
