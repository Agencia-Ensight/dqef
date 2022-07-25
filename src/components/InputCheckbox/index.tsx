import { InputHTMLAttributes } from "react";
import * as S from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

function InputCheckbox({ ...props }: InputProps) {
  return <S.Input type="checkbox" {...props} />;
}

export { InputCheckbox };
