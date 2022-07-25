import { ReactNode } from "react";

export type ToastType = "success" | "error" | "info";

export type AddToastProps = {
  type?: ToastType;
  msg: string;
};

type ToastProviderProps = {
  addToast(data: AddToastProps): void;
};

type ToastContextProvider = {
  children: ReactNode;
};

export { ToastContextProvider, ToastProviderProps };
