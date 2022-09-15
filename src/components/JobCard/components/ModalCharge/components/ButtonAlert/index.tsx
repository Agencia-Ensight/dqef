import { Loading } from "@/components/Loading";
import * as S from "./styles";
import { IButton } from "./typings";

export function ButtonAlert({
  children,
  variant,
  loading = false,
  ...props
}: IButton) {
  return (
    <S.Wrapper variant={variant} {...props}>
      {loading ? <Loading /> : children}
    </S.Wrapper>
  );
}
