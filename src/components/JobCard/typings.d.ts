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

export type CardStatus =
  | "waiting-proposals"
  | "ready-to-start"
  | "in-progress"
  | "partial-delivery"
  | "final-delivery";

type CardType = "STUDENT" | "EDITOR";

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
  discipline: string;
  theme: string;
  typeOfWork: string;
  price: number;
  deliveryAt: Date;
  status: CardStatus;
  type: CardType;
  totalProposals: number;
  totalChanges: number;
  wasEvaluated: boolean;
};
