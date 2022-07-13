import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { UserProvider } from "./UserProvider";

type AppProviderProps = { children: ReactNode };

function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider>
      <UserProvider>{children}</UserProvider>
    </ChakraProvider>
  );
}

export { AppProvider };
