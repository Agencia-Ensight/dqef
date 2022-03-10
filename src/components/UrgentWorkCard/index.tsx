import * as S from "./styles";

import { Props } from "./typings";

export function UrgentWorkCard({
  course,
  title,
  discipline,
  theme,
  typeOfWork,
  price,
  date,
  urgent,
}: Props) {
  return (
    <S.Wrapper>
      {urgent === true ? <S.RocketImage src="/images/rocket.png" /> : ""}
      <S.CourseContainer>
        <S.Course>{course}</S.Course>
      </S.CourseContainer>
      <S.MainContainer>
        <S.Title>{title}</S.Title>
        <S.InformationContainer>
          <S.Subtitle>Disciplina</S.Subtitle>
          <S.Description>{discipline}</S.Description>
        </S.InformationContainer>
        <S.InformationContainer>
          <S.Subtitle>Tema</S.Subtitle>
          <S.Description>{theme}</S.Description>
        </S.InformationContainer>
        <S.InformationContainer>
          <S.Subtitle>Tipo do Trabalho</S.Subtitle>
          <S.Description>{typeOfWork}</S.Description>
        </S.InformationContainer>
        <S.InformationContainer>
          <S.Subtitle>Preço Total</S.Subtitle>
          <S.Price>R${price}</S.Price>
        </S.InformationContainer>
        <S.InformationContainer>
          <S.Subtitle>Data de Entrega</S.Subtitle>
          <S.Date>
            {date}
            {urgent === true ? "- Entrega Urgente" : ""}
          </S.Date>
        </S.InformationContainer>
      </S.MainContainer>
    </S.Wrapper>
  );
}
