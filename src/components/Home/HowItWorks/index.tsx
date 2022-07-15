import { useState } from "react";

import { InfoCard } from "./components/InfoCard";
import * as S from "./styles";
import { IMenu } from "./typings";

function HowItWorks() {
  const [menuItem, setMenuItem] = useState<IMenu>("STUDENT");
  return (
    <S.Wrapper>
      <S.Container>
        <S.SubTitle>
          <S.Button
            selected={menuItem === "STUDENT"}
            onClick={() => setMenuItem("STUDENT")}
          >
            ESTUDANTE
          </S.Button>
          /
          <S.Button
            selected={menuItem === "EMPLOYEE"}
            onClick={() => setMenuItem("EMPLOYEE")}
          >
            REDATOR
          </S.Button>
        </S.SubTitle>
        <S.TitleContainer>
          <S.Title>COMO FUNCIONAMOS?</S.Title>
        </S.TitleContainer>
        {menuItem === "STUDENT" && (
          <S.InfoContainer>
            <InfoCard
              img="/images/student-first-step.png"
              subTitle="Passo 1"
              title="Publique o Trabalho"
              description={
                <p>
                  Clique em <span>publicar trabalho</span> e preencha o
                  formulário com as <span>instruções</span> da sua atividade
                  junto com o <span>valor</span> que está disposto(a) a pagar.
                </p>
              }
            />
            <InfoCard
              img="/images/student-second-step.png"
              subTitle="Passo 2"
              title="Escolha o redator"
              description={
                <p>
                  Seu trabalho será publicado no feed do site para encontrar um
                  <span> redator qualificado</span>. Você receberá ofertas para
                  elaborar a atividade solicitada.
                </p>
              }
            />
            <InfoCard
              img="/images/student-third-step.png"
              subTitle="Passo 3"
              title="Efetue o pagamento"
              description={
                <p>
                  Escolha o redator de sua preferência e <span>realize</span> o
                  <span> pagamento</span> para ele iniciar.
                </p>
              }
            />
            <InfoCard
              img="/images/student-fourth-step.png"
              subTitle="Passo 4"
              title="Efetue o pagamento"
              description={
                <p>
                  Prontinho! Sua atividade será <span>entregue</span> com
                  antecedência!
                </p>
              }
            />
          </S.InfoContainer>
        )}
        {menuItem === "EMPLOYEE" && (
          <S.InfoContainer>
            <InfoCard
              img="/images/employee-first-step.png"
              subTitle="Passo 1"
              title="Escolha um trabalho"
              description={
                <p>
                  Procure algum trabalho que tenha <span>interesse</span>.
                  Clique para ver mais e analisar todos os detalhes da
                  atividade.
                </p>
              }
            />
            <InfoCard
              img="/images/employee-second-step.png"
              subTitle="Passo 2"
              title="Envie uma oferta"
              description={
                <p>
                  Caso tenha o conhecimento necessário, <span>aceite</span> a
                  <span> oferta</span> do estudante ou realize uma
                  <span> contraproposta</span>.
                </p>
              }
            />
            <InfoCard
              img="/images/employee-third-step.png"
              subTitle="Passo 3"
              title="Realize a atividade"
              description={
                <p>
                  Assim que o estudante realizar o <span>pagamento</span>, você
                  será notificado para <span>iniciar</span>.
                </p>
              }
            />
            <InfoCard
              img="/images/employee-fourth-step.png"
              subTitle="Passo 4"
              title="Receba o valor"
              description={
                <p>
                  Após a <span>entrega</span> e a aprovação do estudante, seu
                  pagamento será <span>efetuado</span>.
                </p>
              }
            />
          </S.InfoContainer>
        )}
      </S.Container>
    </S.Wrapper>
  );
}

export { HowItWorks };
