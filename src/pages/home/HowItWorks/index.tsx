import * as S from "./styles";

export function HowItWorks() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image src="/images/how-it-works.png" />
        <S.Info>
          <S.SubTitle>
            <S.Highlight>ESTUDANTE</S.Highlight>/ REDATOR
          </S.SubTitle>
          <S.Title>COMO FUNCIONAMOS?</S.Title>
          <S.Description>
            <S.Highlight>Projeto é</S.Highlight> composto por vários jobs
            individuais, dentro de um ambiente só. Por exemplo, a demanda de
            vários designers para diversos jobs.
          </S.Description>
          <S.Description>
            <S.Highlight>Job é</S.Highlight> uma demanda de um trabalho
            específico. Por exemplo, a demanda de um job de designer para uma
            landing page.
          </S.Description>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
}
