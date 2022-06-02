import { useState } from "react";
import { text } from "stream/consumers";
import * as S from "./styles";
import { Props } from "./typings";

export function InfoCard({
  title,
  pages,
  plagiarism,
  format,
  description,
  observations,
}: Props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.SubTitleContainer>
        <S.SubTitle>Páginas: {pages}</S.SubTitle>
        <S.Line></S.Line>
        <S.SubTitle>Plágio: {plagiarism}%</S.SubTitle>
        <S.Line></S.Line>
        <S.SubTitle>Formato: {format}</S.SubTitle>
      </S.SubTitleContainer>
      <S.Description>
        {isReadMore ? description.slice(0, 500) : description}
        {description.length >= 100 && (
          <S.Span onClick={toggleReadMore}>
            {isReadMore ? "... Ler mais" : " Mostrar menos"}
          </S.Span>
        )}
      </S.Description>
      <S.SecondDescription>
        <S.Span>Observações: </S.Span>
        {observations}
      </S.SecondDescription>
    </S.Wrapper>
  );
}
