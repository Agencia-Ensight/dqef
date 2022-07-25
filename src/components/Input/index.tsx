import * as S from "./styles";
import { Props } from "./typings";

function Input({ label, mandatory, error, register, ...props }: Props) {
  return (
    <S.Wrapper className="input-root">
      <label>
        {label}
        <span>{mandatory && "*"}</span>
      </label>
      <input
        {...props}
        {...((register && props.name && register(props.name)) ?? {})}
      />
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  );
}

export { Input };
