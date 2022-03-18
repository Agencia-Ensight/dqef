import * as S from "./styles";

import { Props } from "./typings";

export function TagKnowledge({ children, ...props }: Props) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
