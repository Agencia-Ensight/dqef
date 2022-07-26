import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";

import { graphql } from "@/services/api";
import { UserProvider } from "./UserProvider";
import { ToastProvider } from "./ToastProvider";
import { ModalProvider } from "./ModalProvider";

type AppProviderProps = { children: ReactNode };

function AppProvider({ children }: AppProviderProps) {
  return (
    <ApolloProvider client={graphql}>
      <UserProvider>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </UserProvider>
    </ApolloProvider>
  );
}

export { AppProvider };
