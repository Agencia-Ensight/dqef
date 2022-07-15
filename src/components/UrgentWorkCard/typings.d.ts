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

export type IStatus =
  | "EMPLOYEE-SEND"
  | "EMPLOYEE-PAID"
  | "EMPLOYEE-START"
  | "EMPLOYEE-BILL"
  | "EMPLOYEE-CHANGE"
  | "EMPLOYEE-DONE"
  | "EMPLOYEE-WANT"
  | "EMPLOYEE-SEE"
  | "STUDENT-CREATE"
  | "STUDENT-GET"
  | "STUDENT-DONE"
  | "STUDENT"
  | "STUDENT-EDIT";

export type Props = CardProps &
  CourseContainerProps & {
    jobId?: string;
    title: string;
    discipline: string;
    theme: string;
    typeOfWork: string;
    price: number;
    date: string;
    status: IStatus;
  };

type CourseContainerProps = {
  course: CourseVariant;
};

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
