import { ReactNode } from "react";

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type CreateUserProps = {
  name: string;
  email: string;
  password: string;
};

type SignInUserProps = {
  email: string;
  password: string;
};

type UserProviderProps = {
  user: UserProps;
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
