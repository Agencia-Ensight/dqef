import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";

import { graphql } from "@/services/api";
import { UserProvider } from "./UserProvider";
import { ToastProvider } from "./ToastProvider";

type AppProviderProps = { children: ReactNode };

function AppProvider({ children }: AppProviderProps) {
  return (
    <ApolloProvider client={graphql}>
      <ChakraProvider>
        <UserProvider>
          <ToastProvider>{children}</ToastProvider>
        </UserProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export { AppProvider };
