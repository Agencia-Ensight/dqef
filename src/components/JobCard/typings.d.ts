export type CourseVariant =
  | "DIREITO"
  | "ENG-CIVIL"
  | "PEDAGOGIA"
  | "NUTRICAO"
  | "MEDICINA"
  | "ARQUITETURA"
  | "ECONOMIA"
  | "ADM"
  | "PSICOLOGIA";

export type EditorCardType = {
  type: "editor";
  status: "published" | "finished" | "on-going" | "want-to-do";
  state:
    | "paid"
    | "waiting-payment"
    | "show-feedback"
    | "report-problem"
    | "answer-demand"
    | "changes"
    | "requested-changes"
    | "start-job";
};

export type StudentCardType = {
  type: "student";
  status?: "finished" | "on-going" | "published";
  state?: "request-changes" | "show-proposals" | "editor-rate";
};

type CardType = EditorCardType | StudentCardType;

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

export type Props = CardProps &
  CardType & {
    id: string;
    title: string;
    discipline: string;
    theme: string;
    typeOfWork: string;
    price: number;
    date: string;
  };
