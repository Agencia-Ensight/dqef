import * as S from "./styles";

export function About() {
  return (
    <S.Wrapper>
      <S.Container id="about">
        <S.Image src="/images/about.png" />
        <S.Info>
          <S.Title>
            Sobre a <S.Highlight>DQEF</S.Highlight>
          </S.Title>
          <S.Description>
            A Deixa Que Eu Faço é uma plataforma educacional que tem como
            objetivo conceder aquilo que o universitário mais precisa: tempo e
            dinheiro!
          </S.Description>
          <S.Description>
            Mas como fazemos isso? Através do nosso site, conectamos o
            universitário que está sem tempo e atolado de trabalhos acadêmicos,
            a outro universitário, que está disposto a realizar essas atividades
            e descolar uma renda extra!
          </S.Description>
          <S.Description>
            Resultados: Ajudamos mais de 2.000 universitários em todo Brasil;
            Índice de Satisfação acima de 95%; Juntamos mais de 1000 redatores
            dos mais diversos assuntos em um único lugar.
          </S.Description>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
}
