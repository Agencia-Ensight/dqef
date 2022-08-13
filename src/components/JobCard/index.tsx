import Link from "next/link";
import { format } from "date-fns";

import * as S from "./styles";
import { ICardProps } from "./typings";

function JobCard(job: ICardProps) {
  const formattedDate = format(job.deliveryAt, "dd/MM/yyyy 'às' HH:mm");

  return (
    <S.Wrapper>
      <S.Container>
        {job.urgent && <S.RocketImage src="/images/rocket.png" />}
        <S.CourseContainer course={job.course}>
          <S.Course>{job.course}</S.Course>
        </S.CourseContainer>
        <S.MainContainer>
          <S.Id>#{job.id}</S.Id>
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
            <S.Date urgent={job.urgent}>{formattedDate}</S.Date>
          </S.InformationContainer>
          {job.type === "EDITOR" && (
            <>
              {job.status === "waiting-proposals" && job.totalProposals > 0 && (
                <S.WaitStudent>Aguardando estudante...</S.WaitStudent>
              )}
              {job.status === "partial-delivery" && job.totalChanges == 0 && (
                <S.WaitStudent>Aguardando estudante...</S.WaitStudent>
              )}
            </>
          )}
          {job.type === "STUDENT" && (
            <>
              {(job.status === "ready-to-start" ||
                (job.status === "partial-delivery" &&
                  job.totalChanges > 0)) && (
                <S.WaitStudent>Aguardando editor...</S.WaitStudent>
              )}
              {job.status === "in-progress" && (
                <S.WaitStudent>Em andamento com o editor</S.WaitStudent>
              )}
            </>
          )}
        </S.MainContainer>
      </S.Container>
      <S.FooterContainer>
        {job.type === "STUDENT" && (
          <>
            {job.status === "waiting-proposals" && (
              <>
                <S.Button>Ver mais</S.Button>
                {job.totalProposals ? (
                  <S.Button>Propostas</S.Button>
                ) : (
                  <S.Button>Editar</S.Button>
                )}
              </>
            )}
            {job.status === "partial-delivery" && job.totalChanges === 0 && (
              <>
                <S.Button>Entrega</S.Button>
                <S.Button>Ver mais</S.Button>
                <S.Button>Alterações</S.Button>
              </>
            )}
            {job.status === "final-delivery" &&
              (!job.wasEvaluated ? (
                <S.Button>Avaliar</S.Button>
              ) : (
                <>
                  <S.Button>Entrega</S.Button>
                  <S.Button>Ver mais</S.Button>
                </>
              ))}
          </>
        )}
        {job.type === "EDITOR" && (
          <>
            {job.status === "waiting-proposals" && job.totalProposals === 0 && (
              <>
                <S.Button>Aceitar</S.Button>
                <S.Button>Contraproposta</S.Button>
              </>
            )}
            {job.status === "ready-to-start" && <S.Button>Iniciar</S.Button>}
            {job.status === "in-progress" && (
              <>
                <S.Button>Entregar</S.Button>
                <S.Button>Ver mais</S.Button>
                <S.Button>Problema</S.Button>
              </>
            )}
            {job.status === "partial-delivery" && job.totalChanges > 0 && (
              <>
                <S.Button>Entregar</S.Button>
                <S.Button>Ver mais</S.Button>
                <S.Button>Alterações</S.Button>
              </>
            )}
            {job.status === "final-delivery" &&
              (!job.wasEvaluated ? (
                <S.Button>Ver mais</S.Button>
              ) : (
                <S.Button>Ver avaliação</S.Button>
              ))}
          </>
        )}
      </S.FooterContainer>
    </S.Wrapper>
  );
}

export { JobCard };
