import * as S from "./styles";
import { Props } from "./typings";

export function FileCard({ title }: Props) {
  return <S.Wrapper>{title}</S.Wrapper>;
}
