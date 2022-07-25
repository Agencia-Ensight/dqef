import { UpdateUserProps } from "@/contexts/UserProvider/typings";

type UpdateConfigsProps = {
  passwordConfirmation: string;
} & UpdateUserProps;

export { UpdateConfigsProps };
