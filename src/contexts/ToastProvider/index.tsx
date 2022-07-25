import "react-toastify/dist/ReactToastify.css";

import { createContext, useCallback, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

import {
  AddToastProps,
  ToastContextProvider,
  ToastProviderProps,
} from "./typings";

const ToastContext = createContext<ToastProviderProps>(
  {} as ToastProviderProps
);

function ToastProvider({ children }: ToastContextProvider) {
  const addToast = useCallback(
    ({ type = "info", msg }: AddToastProps) => toast(msg, { type }),
    []
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer position="top-center" />
    </ToastContext.Provider>
  );
}

function useToast(): ToastProviderProps {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(`useToast must be used within a ToastProvider`);
  }

  return context;
}

export { ToastProvider, useToast };
