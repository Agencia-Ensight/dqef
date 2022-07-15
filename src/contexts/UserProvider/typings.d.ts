import { ReactNode } from "react";

type UserProps = {
  name: string;
  email: string;
  roles: string[];
};

type CreateUserProps = {
  name: string;
  email: string;
  birthDate: string;
  password: string;
};

type SignInUserProps = {
  email: string;
  password: string;
};

type UserProviderProps = {
  user?: UserProps;
  signIn(data: SignInUserProps): Promise<void>;
  signUp(user: CreateUserProps): Promise<void>;
  signOut(): Promise<void>;
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
