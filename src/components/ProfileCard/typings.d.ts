export type Props = {
  img: string;
  profileName: string;
  course: CourseVariant;
  variant: "EMPLOYEE" | "STUDENT";
};

type CourseVariant =
  | "Direito"
  | "Eng-Civil"
  | "Pedagogia"
  | "Nutrição"
  | "Medicina"
  | "Arquitetura"
  | "Economia"
  | "ADM"
  | "Psicologia";
