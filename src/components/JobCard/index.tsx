import { Button } from "../Button";
import * as S from "./styles";

import { Props } from "./typings";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../Modal";

function JobCard(job: Props) {
  const { isShown, toggle } = useModal();

  const { isShown: isShown2, toggle: toggle2 } = useModal();

  return (
    <S.Wrapper>
      <S.Container>
        {job.urgent && <S.RocketImage src="/images/rocket.png" />}
        <S.CourseContainer course={job.course}>
          <S.Course>{job.course}</S.Course>
        </S.CourseContainer>
        <S.MainContainer>
          <S.Title>{job.title}</S.Title>
          <S.InformationContainer>
            <S.Subtitle>Disciplina</S.Subtitle>
            <S.Description>{job.discipline}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Tema</S.Subtitle>
            <S.Description>{job.theme}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Tipo do Trabalho</S.Subtitle>
            <S.Description>{job.typeOfWork}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Preço Total</S.Subtitle>
            <S.Price>R${job.price}</S.Price>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Data de Entrega {job.urgent && "Urgente"}</S.Subtitle>
            <S.Date urgent={job.urgent}>{job.date}</S.Date>

            {/* Employee */}
            {job.status === "EMPLOYEE-SEND" && (
              <S.WaitStudent>Aguardando Estudante ...</S.WaitStudent>
            )}

            {job.status === "EMPLOYEE-START" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}

            {job.status === "EMPLOYEE-CHANGE" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}

            {job.status === "EMPLOYEE-BILL" && (
              <S.Bill>Responda a Cobrança</S.Bill>
            )}
          </S.InformationContainer>
        </S.MainContainer>
      </S.Container>
      {/* Employee */}
    </S.Wrapper>
  );
}

export { JobCard };
