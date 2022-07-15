import * as S from "./styles";
import { IInfoCard } from "./typings";

export function InfoCard({ img, title, subTitle, description }: IInfoCard) {
  return (
    <S.Wrapper>
      <img src={img} alt="" />
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
