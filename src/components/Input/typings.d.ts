import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  mandatory?: boolean;
  label?: string;
  error?: string;
  register?: UseFormRegister<any>;
};
