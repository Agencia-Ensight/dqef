import { Button } from "../Button";
import * as S from "./styles";

import { Props } from "./typings";

function JobCard(job: Props) {
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

            {/* Editor */}
            {job.type === "editor" && <></>}

            {/* Student */}
            {job.type === "student" && (
              <>
                {job.status === "on-going" &&
                  job.state === "request-changes" && (
                    <S.WaitStudent>Solicitar Alterações</S.WaitStudent>
                  )}

                {job.status === "published" &&
                  job.state === "show-proposals" && (
                    <S.WaitStudent>Ver propostas</S.WaitStudent>
                  )}

                {job.status === "finished" && job.state === "editor-rate" && (
                  <S.WaitStudent>Avaliar Redator</S.WaitStudent>
                )}
              </>
            )}

            {/* {job.status === "EMPLOYEE-SEND" && (
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
            )} */}
          </S.InformationContainer>
        </S.MainContainer>
      </S.Container>
      {/* Employee */}
    </S.Wrapper>
  );
}

export { JobCard };
