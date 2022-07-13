import * as S from "./styles";

function Footer() {
  return (
    <S.Wrapper>
      <p>Copyright © {new Date().getFullYear()} DQEF. Direitos Reservados.</p>
      <S.Container>
        <p>Termos e Políticas de Privacidade</p>
        <S.Anchor href="#">Ver</S.Anchor>
      </S.Container>
    </S.Wrapper>
  );
}

export { Footer };
