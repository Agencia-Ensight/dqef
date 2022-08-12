import { UpdateUserProps } from "@/contexts/UserProvider/typings";
import {
  KnowledgeProps,
  FormationProps,
  CollegeProps,
  CourseProps,
} from "@/services/graphql/queries";

export type ProfileProps = {
  knowledges: KnowledgeProps[];
  formations: FormationProps[];
  colleges: CollegeProps[];
  higher_courses: CourseProps[];
};

type UpdateConfigsProps = {
  passwordConfirmation: string;
} & UpdateUserProps;

export { UpdateConfigsProps };
