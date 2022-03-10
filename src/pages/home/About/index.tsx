import * as S from "./styles";

export function About() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image src="/images/about.png" />
        <S.Info>
          <S.Title>
            Sobre a <S.Highlight>DQEF</S.Highlight>
          </S.Title>
          <S.Description>
            Estamos fazendo diferente e facilitando a sua empresa.
          </S.Description>
          <S.Description>
            O nosso objetivo é ajudar no processo de contratação de freelancers
            para empresas. Facilitando o fluxo e organização dos projetos.
          </S.Description>
          <S.Description>
            Sabemos que qualidade é muito importante, e por esse motivo contamos
            com um processo de verificação com os melhores prestadores de
            serviços. Garantindo confiança e credibilidade.
          </S.Description>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
}
