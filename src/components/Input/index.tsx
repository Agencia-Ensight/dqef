import * as S from "./styles";

import { Props } from "./typings";

export function Input({ label, mandatory, ...props }: Props) {
  return (
    <S.Wrapper className="input-root">
      <label>
        {label}
        <span>{mandatory && "*"}</span>
      </label>
      <input {...props} />
    </S.Wrapper>
  );
}
