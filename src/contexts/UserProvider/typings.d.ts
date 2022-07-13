import { ReactNode } from "react";

type UserProps = {
  name: string;
  phoneNumber: string;
  roles: string[];
};

type CreateUserProps = {
  name: string;
  phoneNumber: string;
  birthDate: string;
  password: string;
};

type SignInUserProps = {
  phoneNumber: string;
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
