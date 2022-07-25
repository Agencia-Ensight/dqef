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
};

type CreateSdutentUserProps = {
  type: "STUDENT";
};

type CreateUserProps = {
  name: string;
  email: string;
  password: string;
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

type UserProviderProps = {
  user?: UserProps;
  signIn(data: SignInUserProps): Promise<void>;
  signUp(user: CreateUserProps): Promise<void>;
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
