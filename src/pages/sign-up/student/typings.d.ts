import { ReactNode } from "react";

type CreateUserStudentProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  code: string;
  cpf: string;
  course: number;
  college: number;
  termsOfUse: boolean;
  privacyPolicy: boolean;
};

export { CreateUserStudentProps };
