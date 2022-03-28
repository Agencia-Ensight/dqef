import * as S from "./styles";

import { Props } from "./typings";

export function Input({ label, ...props }: Props) {
  return (
    <S.Wrapper>
      <label>{label}</label>
      <input {...props} />
    </S.Wrapper>
  );
}
