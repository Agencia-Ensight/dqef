import * as S from "./styles";
import { IButton } from "./typings";

export function ButtonAlert({ children, variant, ...props }: IButton) {
  return (
    <S.Wrapper variant={variant} {...props}>
      {children}
    </S.Wrapper>
  );
}
