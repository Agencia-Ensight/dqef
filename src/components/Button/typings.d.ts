import { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinternary";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * @default primary
   */
  variant?: ButtonVariant;
  loading?: boolean;
};
