import * as S from "./styles";
import { Props } from "./typings";

function ButtonKnewave({ size, variant, children, ...props }: Props) {
  return (
    <S.Wrapper type="button" size={size} variant={variant} {...props}>
      {children}
    </S.Wrapper>
  );
}

export { ButtonKnewave };
