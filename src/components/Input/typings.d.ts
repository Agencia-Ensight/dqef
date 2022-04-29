import { InputHTMLAttributes } from "react";

export type Props = InputHTMLAttributes<HTMLInputElement> &
  LabelProps & {
    label?: string;
  };

export type LabelProps = {
  mandatory?: boolean;
};
