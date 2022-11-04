export type EditorMenuProps = "proposals" | "jobsOnGoing" | "jobsDone";


export type Props = {
  img: string;
  profileName: string;
  course: CourseVariant;
  variant: "EMPLOYEE" | "STUDENT";
  onChangeMenu: (menu: EditorMenuProps) => void;
  avgRating?: number;
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
