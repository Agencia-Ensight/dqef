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
      <ToastProvider>
        <UserProvider>
          <ModalProvider>{children}</ModalProvider>
        </UserProvider>
      </ToastProvider>
    </ApolloProvider>
  );
}

export { AppProvider };
