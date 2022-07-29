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
  ResetPasswordProps,
  SignUpConfirmProps,
  UpdateUserProps,
} from "./typings";

import { api } from "@/services/api";

const UserContext = createContext<UserProviderProps>({} as UserProviderProps);

function UserProvider({ children }: UserContextProvider) {
  const [user, setUser] = useState<UserProps>();

  const signIn = useCallback(
    async ({ email, password }: SignInUserProps): Promise<void> => {
      const { data } = await api.post(`/auth/sign-in`, { email, password });

      const accessToken = data.data.token.token;
      const userFromAPI = data.data.user;

      const parsedUser: UserProps = {
        id: userFromAPI.id,
        name: userFromAPI.name,
        email: userFromAPI.email,
        avatar: userFromAPI.avatar,
        type: userFromAPI.type === 1 ? "STUDENT" : "EDITOR",
      };

      setUser(parsedUser);
      setCookie(null, `@dqef/user`, JSON.stringify(parsedUser));
      setCookie(null, `@dqef/access-token`, accessToken);
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    },
    []
  );

  const signOut = useCallback(async (): Promise<void> => {
    destroyCookie(null, `@dqef/user`);
    destroyCookie(null, `@dqef/access-token`);
    setUser(undefined);
    api.defaults.headers.common.Authorization = ``;
  }, []);

  const updateUser = useCallback(
    async ({ type, ...newUser }: UpdateUserProps): Promise<void> => {
      await api.put(`/profile`, newUser);

      setUser((data) => {
        const userConverted = data && {
          ...data,
          ...newUser,
        };

        if (userConverted) {
          setCookie(null, `@dqef/user`, JSON.stringify(userConverted));
          return userConverted;
        }

        return data;
      });
    },
    []
  );

  const signUp = useCallback(
    async (newUser: CreateUserProps): Promise<void> => {
      if (newUser.type === "STUDENT") {
        await api.post(`/auth/sign-up`, {
          email: newUser.email,
          password: newUser.password,
          name: newUser.name,
          phone: newUser.phone,
          cpf: newUser.cpf,
          type: 1,
          formation: 1,
          course: newUser.courseId,
          college: newUser.collegeId,
          knowledges: [],
        });
      } else if (newUser.type === "EDITOR") {
        await api.post(`/auth/sign-up`, {
          email: newUser.email,
          password: newUser.password,
          name: newUser.name,
          phone: newUser.phone,
          cpf: newUser.cpf,
          type: 2,
          formation: newUser.formationId,
          college: newUser.collegeId,
          knowledges: newUser.knowledgeIds,
        });
      }
    },
    []
  );

  const signUpConfirm = useCallback(
    async (data: SignUpConfirmProps) => {
      await api.post("/auth/sign-up/code", data);
      await signIn({ email: data.email, password: data.password });
    },
    [signIn]
  );

  const forgotPassword = useCallback(async (email: string) => {
    await api.post("/auth/forget-password", { email });
  }, []);

  const resetPassword = useCallback(
    async ({ code, email, newPassword }: ResetPasswordProps) => {
      await api.post("/auth/forget-password/code", {
        email,
        code,
        password: newPassword,
      });
    },
    []
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
    <UserContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signUpConfirm,
        signOut,
        updateUser,
        forgotPassword,
        resetPassword,
      }}
    >
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
