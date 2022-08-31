import * as S from "./styles";
import { Props } from "./typings";

export function FileCard({ title, link }: Props) {
  return (
    <S.Wrapper href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </S.Wrapper>
  );
}
