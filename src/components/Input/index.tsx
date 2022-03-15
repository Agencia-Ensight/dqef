import * as S from "./styles";

import { Props } from "./typings";

export function Input({ label, children, ...props }: Props) {
  return (
    <S.Wrapper {...props} placeholder={children}>
      <label>{label}</label>
    </S.Wrapper>
  );
}
