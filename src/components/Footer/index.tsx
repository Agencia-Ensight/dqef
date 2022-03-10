import * as S from "./styles";

export function Footer() {
  return (
    <S.Wrapper>
      <p>Copyright © 2022 DQEF. Direitos Reservados.</p>
      <S.Container>
        <p>Termos e Políticas de Privacidade</p>
        <S.Anchor href="#">Ver</S.Anchor>
      </S.Container>
    </S.Wrapper>
  );
}
