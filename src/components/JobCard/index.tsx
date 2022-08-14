import { useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import { format } from "date-fns";

import * as S from "./styles";
import { ICardProps } from "./typings";
import { useUpdateJobStatus } from "@/hooks";
import { useToast, useModal, useUser } from "@/contexts";
import { ModalRating } from "./components/ModalRating";

function handleProblem(jobId: string) {
  const msg = `Olá, estou com um problema com o trabalho ${jobId}`;

  Router.push(
    `https://api.whatsapp.com/send?phone=554199959588&text=${encodeURI(msg)}`
  );
}

function JobCard(job: ICardProps) {
  const { updateJobStatus } = useUpdateJobStatus();
  const { open } = useModal();
  const { user } = useUser();
  const { addToast } = useToast();
  const formattedDate = format(job.deliveryAt, "dd/MM/yyyy 'às' HH:mm");

  const handlePartialDelivery = useCallback(async () => {
    try {
      await updateJobStatus(job.id, "partial-delivery");
      addToast({ type: "success", msg: "Entrega realizada!" });
    } catch (error) {
      addToast({
        type: "error",
        msg: "Não conseguimos entregar o trabalho, tente novamente mais tarde",
      });
    }
  }, [addToast, updateJobStatus, job.id]);

  const handleStartJob = useCallback(async () => {
    try {
      await updateJobStatus(job.id, "in-progress");
      addToast({ type: "success", msg: "Trabalho iniciado!" });
    } catch (error) {
      addToast({
        type: "error",
        msg: "Não conseguimos iniciar o trabalho, tente novamente mais tarde",
      });
    }
  }, [addToast, updateJobStatus, job.id]);

  const handleSendAvaliation = useCallback(() => {}, []);

  function handleSendReview() {
    open(`Olá, ${user?.name}`, { content: () => <ModalRating /> });
  }

  const handleSeeAvaliation = useCallback(() => {}, []);

  const handleSeeChanges = useCallback(() => {}, []);

  const handleSendChanges = useCallback(() => {}, []);

  const handleAcceptJob = useCallback(async () => {
    try {
      await updateJobStatus(job.id, "ready-to-start");
      addToast({ type: "success", msg: "Trabalho aceito!" });
    } catch (error) {
      addToast({
        type: "error",
        msg: "Erro ao aceitar o trabalho, tente novamente mais tarde",
      });
    }
  }, [addToast, updateJobStatus, job.id]);

  const handleSendCounterProposal = useCallback(() => {}, []);

  const handleSeeDelivery = useCallback(() => {}, []);

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
              {((job.status === "waiting-proposals" &&
                job.totalProposals > 0) ||
                (job.status === "partial-delivery" &&
                  job.totalChanges == 0)) && (
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
                <Link href={`/jobs/${job.id}`} passHref>
                  <S.Button>Ver mais</S.Button>
                </Link>
                {job.totalProposals ? (
                  <Link href={`/jobs/${job.id}/proposals`} passHref>
                    <S.Button>Propostas</S.Button>
                  </Link>
                ) : (
                  <Link href={`/jobs/${job.id}/update`} passHref>
                    <S.Button>Editar</S.Button>
                  </Link>
                )}
              </>
            )}
            {job.status === "partial-delivery" && job.totalChanges === 0 && (
              <>
                <S.Button onClick={handlePartialDelivery}>Entrega</S.Button>
                <Link href={`/jobs/${job.id}`} passHref>
                  <S.Button>Ver mais</S.Button>
                </Link>
                <S.Button onClick={handleSendChanges}>Alterações</S.Button>
              </>
            )}
            {job.status === "final-delivery" &&
              (!job.wasEvaluated ? (
                <S.Button
                  onClick={() => handleSendReview()}
                  // onClick={() => handleSendAvaliation()}
                >
                  Avaliar
                </S.Button>
              ) : (
                <>
                  <S.Button onClick={() => handleSeeDelivery()}>
                    Entrega
                  </S.Button>
                  <Link href={`/jobs/${job.id}`} passHref>
                    <S.Button>Ver mais</S.Button>
                  </Link>
                </>
              ))}
          </>
        )}

        {job.type === "EDITOR" && (
          <>
            {job.status === "waiting-proposals" && job.totalProposals === 0 && (
              <>
                <S.Button onClick={() => handleAcceptJob()}>Aceitar</S.Button>
                <S.Button onClick={() => handleSendCounterProposal()}>
                  Contraproposta
                </S.Button>
              </>
            )}
            {job.status === "ready-to-start" && (
              <S.Button onClick={() => handleStartJob()}>Iniciar</S.Button>
            )}
            {job.status === "in-progress" && (
              <>
                <S.Button onClick={() => handlePartialDelivery()}>
                  Entregar
                </S.Button>
                <Link href={`/jobs/${job.id}`} passHref>
                  <S.Button>Ver mais</S.Button>
                </Link>
                <S.Button onClick={() => handleProblem(job.id)}>
                  Problema
                </S.Button>
              </>
            )}
            {job.status === "partial-delivery" && job.totalChanges > 0 && (
              <>
                <S.Button onClick={() => handlePartialDelivery()}>
                  Entregar
                </S.Button>
                <Link href={`/jobs/${job.id}`} passHref>
                  <S.Button>Ver mais</S.Button>
                </Link>
                <S.Button onClick={() => handleSeeChanges()}>
                  Alterações
                </S.Button>
              </>
            )}
            {job.status === "final-delivery" &&
              (!job.wasEvaluated ? (
                <Link href={`/jobs/${job.id}`} passHref>
                  <S.Button>Ver mais</S.Button>
                </Link>
              ) : (
                <S.Button onClick={() => handleSeeAvaliation()}>
                  Ver avaliação
                </S.Button>
              ))}
          </>
        )}
      </S.FooterContainer>
    </S.Wrapper>
  );
}

export { JobCard };
