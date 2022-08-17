import { useCallback, useMemo } from "react";
import Link from "next/link";
import Router from "next/router";
import { format } from "date-fns";

import * as S from "./styles";
import { ICardProps } from "./typings";
import { useModal, useUser } from "@/contexts";
import {
  ModalRating,
  ModalStartJob,
  ModalCharge,
  ModalProposalInfo,
  ModalCounterProposal,
  ModalSendJob,
  ModalSeeChanges,
  ModalSeeRating,
  ModalSeeJob,
} from "./components";

function handleProblem(jobId: string) {
  const msg = `Olá, estou com um problema com o trabalho ${jobId}`;
  return `https://api.whatsapp.com/send?phone=554199959588&text=${encodeURI(
    msg
  )}`;
}

function JobCard(job: ICardProps) {
  const modal = useModal();
  const { user } = useUser();

  const formattedDate = useMemo(
    () => format(job.deliveryAt, "dd/MM/yyyy 'às' HH:mm"),
    [job.deliveryAt]
  );

  const handleSendReview = useCallback(() => {
    modal.open(`Olá, ${user?.name}`, { content: () => <ModalRating /> });
  }, [modal]);

  const handleJobDelivery = useCallback(() => {
    modal.open("Deseja enviar o trabalho?", {
      content: () => (
        <ModalSendJob
          acceptPlagiarism={20} //TODO
          plagiarismOfJob={20} //TODO
          dateLimitOfRequestChanges={new Date()} //TODO
        />
      ),
    });
  }, [modal]);

  const handleSendCounterProposal = useCallback(() => {
    modal.open("Alterar Valor", { content: () => <ModalCounterProposal /> });
  }, [modal]);

  const handleAcceptJob = useCallback(() => {
    modal.open(
      "Olá, redator! Ficamos felizes pelo seu interesse em um dos trabalhos publicados ",
      { content: () => <ModalProposalInfo /> }
    );
  }, [modal]);

  const handleSeeChanges = useCallback(() => {
    modal.open(`Olá, ${user?.name}. Essas são as alterações solicitadas`, {
      content: () => (
        <ModalSeeChanges
          dateOfTheFinalAdjust={new Date()} //TODO
          obs="teste 1" //TODO
        />
      ),
    });
  }, [modal]);

  const handleCharge = useCallback(() => {
    modal.open(`Olá, ${user?.name}`, {
      content: () => (
        <ModalCharge
          dateOfDelivery={new Date()} //TODO
        />
      ),
    });
  }, [modal]);

  const handleSeeJob = useCallback(() => {
    modal.open(`Olá, ${user?.name}`, {
      content: () => (
        <ModalSeeJob
          isFirstDelivery={true} //TODO
          dateOfChanges={new Date()} //TODO
        />
      ),
    });
  }, [modal]);

  const handleStartJob = useCallback(() => {
    modal.open(`Negócio Fechado!`, {
      content: () => (
        <ModalStartJob
          jobId={job.id}
          dateOfDelivery={new Date()} //TODO
          dateFirstCharge={new Date()} //TODO
          dateSecondCharge={new Date()} //TODO
          dateThirdCharge={new Date()} //TODO
        />
      ),
    });
  }, [modal, job.id]);

  const handleSeeRating = useCallback(() => {
    modal.open("Feedback do Estudante", {
      content: () => (
        <ModalSeeRating
          obs="banana" //TODO
          rating={20} //TODO
        />
      ),
    });
  }, [modal]);

  const handleSendChanges = useCallback(() => {}, []);

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
            <S.Description>{job.knowledges?.join(", ")}</S.Description>
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
          {job.type === "STUDENT" && job.creatorId === user?.id && (
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
        <Link href={`/jobs/${job.id}`} passHref>
          <S.Button>Ver mais</S.Button>
        </Link>

        {job.type === "STUDENT" && job.creatorId === user?.id && (
          <>
            {job.status === "waiting-proposals" && (
              <>
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
                <S.Button onClick={handleJobDelivery}>Entrega</S.Button>
                <S.Button onClick={handleSendChanges}>Alterações</S.Button>
              </>
            )}
            {job.status === "final-delivery" &&
              (!job.wasEvaluated ? (
                <S.Button onClick={() => handleSendReview()}>Avaliar</S.Button>
              ) : (
                <S.Button onClick={() => handleSeeJob()}>Entrega</S.Button>
              ))}
          </>
        )}

        {job.type === "EDITOR" && (
          <>
            {job.status === "waiting-proposals" && job.totalProposals === 0 && (
              <>
                <S.Button onClick={() => handleAcceptJob()}>Aceitar</S.Button>
                <S.Button onClick={() => handleSendCounterProposal()}>
                  Proposta
                </S.Button>
              </>
            )}
            {job.status === "ready-to-start" && (
              <S.Button onClick={() => handleStartJob()}>Iniciar</S.Button>
            )}
            {job.status === "in-progress" && (
              <>
                <S.Button onClick={() => handleJobDelivery()}>
                  Entregar
                </S.Button>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={handleProblem(job.id)}
                >
                  <S.Button>Problema</S.Button>
                </a>

                {/* <S.Button disabled onClick={() => handleCharge()}>
                  Cobrança
                </S.Button> */}
              </>
            )}
            {job.status === "partial-delivery" && job.totalChanges > 0 && (
              <>
                <S.Button onClick={() => handleJobDelivery()}>
                  Entregar
                </S.Button>
                <S.Button onClick={() => handleSeeChanges()}>
                  Alterações
                </S.Button>
              </>
            )}
            {job.status === "final-delivery" && job.wasEvaluated && (
              <S.Button onClick={() => handleSeeRating()}>
                Ver avaliação
              </S.Button>
            )}
          </>
        )}
      </S.FooterContainer>
    </S.Wrapper>
  );
}

export { JobCard };
