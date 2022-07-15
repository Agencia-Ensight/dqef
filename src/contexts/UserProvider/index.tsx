import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";

import {
  UserProps,
  UserProviderProps,
  UserContextProvider,
  CreateUserProps,
  SignInUserProps,
} from "./typings";

import { api } from "@/services/api";

const UserContext = createContext<UserProviderProps>({} as UserProviderProps);

function UserProvider({ children }: UserContextProvider) {
  const [user, setUser] = useState<UserProps>();

  const signIn = useCallback(
    async ({ email, password }: SignInUserProps): Promise<void> => {
      const { data } = await api.post(`/users/auth`, { email, password });

      setUser(data.user);
      setCookie(null, `@dqef/user`, JSON.stringify(data.user));
      setCookie(null, `@dqef/access-token`, data.accessToken);
      api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    },
    []
  );

  const signOut = useCallback(async (): Promise<void> => {
    destroyCookie(null, `@dqef/user`);
    setUser(undefined);
    api.defaults.headers.common.Authorization = ``;
  }, []);

  const updateUser = useCallback(async (newUser: UserProps): Promise<void> => {
    await api.put(`/users`, newUser);
    setUser(newUser);
    setCookie(null, `@dqef/user`, JSON.stringify(newUser));
  }, []);

  const signUp = useCallback(
    async (newUser: CreateUserProps): Promise<void> => {
      await api.post(`/users`, newUser);
      await signIn({
        email: newUser.email,
        password: newUser.password,
      });
    },
    [signIn]
  );

  useEffect(() => {
    const cookies = parseCookies();
    const user = cookies[`@dqef/user`];
    const accessToken = cookies[`@dqef/access-token`];

    if (user && accessToken) {
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, signIn, signUp, signOut, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser(): UserProviderProps {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(`useUser must be used within a UserProvider`);
  }

  return context;
}

export { UserProvider, useUser };
