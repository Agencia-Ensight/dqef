import * as S from "./styles";
import { Props } from "./typings";

function ButtonKnewave({
  size,
  variant,
  children,
  loading = false,
  ...props
}: Props) {
  return (
    <S.Wrapper
      type="button"
      size={size}
      variant={variant}
      disabled={loading}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </S.Wrapper>
  );
}

export { ButtonKnewave };
