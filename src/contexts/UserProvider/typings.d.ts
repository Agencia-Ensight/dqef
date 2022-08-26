import { ReactNode } from "react";

type UserProps = {
  id: string;
  type: "EDITOR" | "STUDENT";
  name: string;
  email: string;
  avatar?: string;
};

type CreateEditorUserProps = {
  type: "EDITOR";
  formationId: number;
  cpf: string;
  knowledgeIds: number[];
  payment: string;
};

type CreateSdutentUserProps = {
  type: "STUDENT";
};

type CreateUserProps = {
  name: string;
  email: string;
  collegeId: number;
  courseId: number;
  password: string;
  phone: string;
} & (CreateEditorUserProps | CreateSdutentUserProps);

export type SignInUserProps = {
  email: string;
  password: string;
};

export type ResetPasswordProps = {
  email: string;
  code: string;
  newPassword: string;
};

export type SignUpConfirmProps = {
  email: string;
  code: string;
  password: string;
};

export type UpdateUserProps = Partial<CreateUserProps>;

type UserProviderProps = {
  user?: UserProps;
  signIn(data: SignInUserProps): Promise<void>;
  signUp(user: CreateUserProps): Promise<void>;
  signUpConfirm(data: SignUpConfirmProps): Promise<void>;
  updateUser(data: UpdateUserProps): Promise<void>;
  signOut(): Promise<void>;
  forgotPassword(email: string): Promise<void>;
  resetPassword(data: ResetPasswordProps): Promise<void>;
  updateUser(newUser: UserProps): Promise<void>;
};

type UserContextProvider = {
  children: ReactNode;
};

export {
  UserContextProvider,
  UserProps,
  UserProviderProps,
  CreateUserProps,
  SignInUserProps,
};
