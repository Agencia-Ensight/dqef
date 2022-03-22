import { Button } from "../Button";
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
  status,
}: Props) {
  return (
    <S.Wrapper>
      <S.Container>
        {urgent === true ? <S.RocketImage src="/images/rocket.png" /> : ""}
        <S.CourseContainer course={course}>
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
            <S.Date urgent={urgent}>
              {date}
              {urgent === true ? "- Entrega Urgente" : ""}
            </S.Date>
            {/* Employee */}
            {status === "EMPLOYEE-SEND" && (
              <S.WaitStudent>Aguardando Estudante ...</S.WaitStudent>
            )}
            {status === "EMPLOYEE-START" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}
            {status === "EMPLOYEE-CHANGE" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}
            {status === "EMPLOYEE-BILL" && <S.Bill>Responda a Cobrança</S.Bill>}
          </S.InformationContainer>
        </S.MainContainer>
      </S.Container>
      {/* Employee */}
      {status === "EMPLOYEE-PAID" && (
        <S.FooterContainer>
          <Button variant="primary">Iniciar Trabalho</Button>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-START" && (
        <S.FooterContainer>
          <Button variant="primary">Entregar</Button>
          <Button variant="secondary">Ver Mais</Button>
          <Button variant="tertiary">Problema</Button>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-BILL" && (
        <S.FooterContainer>
          <Button variant="primary">Entregar</Button>
          <Button variant="secondary">Ver Mais</Button>
          <Button variant="tertiary">Cobrança</Button>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-CHANGE" && (
        <S.FooterContainer>
          <Button variant="primary">Entregar</Button>
          <Button variant="secondary">Ver Mais</Button>
          <Button variant="quinternary">Alterações</Button>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-DONE" && (
        <S.FooterContainer>
          <Button variant="primary">Ver FeedBack</Button>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-SEE" && (
        <S.FooterContainer>
          <Button variant="primary">Ver Mais</Button>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-WANT" && (
        <S.FooterContainer>
          <Button variant="primary">Quero Realizar</Button>
        </S.FooterContainer>
      )}
      {/* Student */}
      {status === "STUDENT-CREATE" && (
        <S.FooterContainer>
          <Button variant="primary">Ver Propostas</Button>
        </S.FooterContainer>
      )}
      {status === "STUDENT-GET" && (
        <S.FooterContainer>
          <Button variant="primary">Entregar</Button>
          <Button variant="secondary">Ver Mais</Button>
          <Button variant="tertiary">Alterações</Button>
        </S.FooterContainer>
      )}
      {status === "STUDENT-DONE" && (
        <S.FooterContainer>
          <Button variant="primary">Entregar</Button>
          <Button variant="secondary">Ver Mais</Button>
          <Button variant="quaternary">Avaliar</Button>
        </S.FooterContainer>
      )}
      {status === "STUDENT" && ""}
      {status === "STUDENT-EDIT" && (
        <S.FooterContainer>
          <Button variant="primary">Editar Trabalho</Button>
        </S.FooterContainer>
      )}
    </S.Wrapper>
  );
}
