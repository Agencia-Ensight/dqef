import { useCallback, useMemo } from "react";
import Link from "next/link";
import { format, isToday, startOfDay } from "date-fns";

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
  ModalRequestChanges,
} from "./components";
import { JobCharge, JobMediaProps } from "@/types/Job";

function handleProblem(jobId: string) {
  const msg = `Olá, estou com um problema com o trabalho ${jobId}`;
  return `https://api.whatsapp.com/send?phone=554199959588&text=${encodeURI(
    msg
  )}`;
}

function checkCharge(charge: JobCharge) {
  if (charge.dayOne && isToday(charge.dayOne)) {
    return charge.dayOne;
  } else if (charge.dayTwo && isToday(charge.dayTwo)) {
    return charge.dayTwo;
  } else if (charge.dayThree && isToday(charge.dayThree)) {
    return charge.dayThree;
  }

  return false;
}

function JobCard(job: ICardProps) {
  const modal = useModal();
  const { user } = useUser();

  const formattedDate = useMemo(
    () => format(job.dateLimit, "dd/MM/yyyy"),
    [job.dateLimit]
  );

  const currentCharge = useMemo(
    () => job.charges && checkCharge(job.charges),
    [job.charges]
  );

  const handleSendReview = useCallback(() => {
    modal.open(`Olá, ${user?.name}`, {
      content: () => (
        <ModalRating jobId={job.id} editorId={job.editorId || ""} />
      ),
    });
  }, [modal, job.id, user?.name, job?.editorId]);

  const handleJobDelivery = useCallback(() => {
    modal.open("Deseja enviar o trabalho?", {
      content: () => (
        <ModalSendJob
          jobId={job.id}
          jobFormatId={job.format.id}
          isLastDelivery={job.status === "REQUEST_CHANGE"}
          acceptPlagiarism={Number(job.maximumPlagiarism)}
          dateLimitOfRequestChanges={new Date()} // TODO
        />
      ),
    });
  }, [modal, job]);

  const handleSendCounterProposal = useCallback(() => {
    modal.open("Alterar Valor", {
      content: () => <ModalCounterProposal jobId={job.id} userId={user!.id} />,
    });
  }, [modal, user?.id, job.id]);

  const handleAcceptJob = useCallback(() => {
    modal.open(
      "Olá, redator! Ficamos felizes pelo seu interesse em um dos trabalhos publicados ",
      {
        content: () => (
          <ModalProposalInfo
            jobId={job.id}
            price={job.price}
            userId={user!.id}
          />
        ),
      }
    );
  }, [modal, job.id, job.price, user?.id]);

  const handleSeeChanges = useCallback(() => {
    modal.open(`Olá, ${user?.name}. Essas são as alterações solicitadas`, {
      content: () => (
        <ModalSeeChanges
          medias={job.change!.medias}
          dateOfTheFinalAdjust={job.deliveryAt} // TODO
          obs={job.change!.obs}
        />
      ),
    });
  }, [modal, job]);

  const handleSeeJob = useCallback(() => {
    let obs = "";
    let medias: JobMediaProps[] = [];

    if (job.change) {
      obs = job.change.obs;
      medias = job.change.medias;
    } else if (job.delivery) {
      obs = job.delivery.obs;
      medias = job.delivery.medias;
    }

    modal.open(`Olá, ${user?.name}`, {
      content: () => (
        <ModalSeeJob
          jobId={job.id}
          medias={medias}
          obs={obs}
          isFirstDelivery={job.status === "FIRST_DELIVERY"}
          dateOfChanges={new Date()} //TODO
        />
      ),
    });
  }, [modal, job]);

  const handleStartJob = useCallback(() => {
    modal.open(`Negócio Fechado!`, {
      content: () => (
        <ModalStartJob
          jobId={job.id}
          dateOfDelivery={job.deliveryAt}
          dateFirstCharge={new Date()} //TODO
          dateSecondCharge={new Date()} //TODO
          dateThirdCharge={new Date()} //TODO
        />
      ),
    });
  }, [modal, job.id, job.deliveryAt]);

  const handleSeeRating = useCallback(() => {
    modal.open("Feedback do Estudante", {
      content: () => (
        <ModalSeeRating
          obs={job.rating?.testimonial || ""}
          rating={job.rating!.rating}
        />
      ),
    });
  }, [modal, job.rating]);

  const handleSendChanges = useCallback(() => {
    modal.open("Solicitar alteração", {
      content: () => <ModalRequestChanges jobId={job.id} />,
    });
  }, [modal, job]);

  const handleCharge = useCallback(() => {
    modal.open(`Olá, ${user?.name}`, {
      content: () => (
        <ModalCharge dateOfDelivery={job.deliveryAt} jobId={job.id} />
      ),
    });
  }, [modal, job.deliveryAt, job.id]);

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
            <S.Description>{job.mediaType}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Preço Total</S.Subtitle>
            <S.Price>R${job.price}</S.Price>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Data de Entrega {job.urgent && "Urgente"}</S.Subtitle>
            <S.Date urgent={job.urgent}>{formattedDate}</S.Date>
          </S.InformationContainer>
          {user?.type === "EDITOR" && (
            <>
              {((job.status === "PUBLISHED" &&
                job.totalProposals > 0 &&
                job.proposals.find(
                  (proposal) =>
                    proposal.user.id === user?.id && proposal.status.id === 1
                )) ||
                (job.status === "FIRST_DELIVERY" &&
                  job.totalChanges == 0 &&
                  job.proposals.find(
                    (proposal) =>
                      proposal.user.id === user?.id && proposal.status.id === 2
                  ))) && <S.WaitStudent>Aguardando estudante...</S.WaitStudent>}
            </>
          )}
          {user?.type === "STUDENT" && job.creatorId === user?.id && (
            <>
              {((job.status === "PUBLISHED" &&
                job.proposals.find((proposal) => proposal.status.id === 2)) ||
                job.status === "ACCEPTED_EDITOR" ||
                job.status === "REQUEST_CHANGE" ||
                (job.status === "FIRST_DELIVERY" && job.totalChanges > 0)) && (
                <S.WaitStudent>Aguardando editor...</S.WaitStudent>
              )}
              {job.status === "IN_PROGRESS" && (
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

        {user?.type === "STUDENT" && job.creatorId === user?.id && (
          <>
            {job.status === "PUBLISHED" && (
              <>
                {!!job.totalProposals &&
                  !job.proposals.find(
                    (proposal) => proposal.status.id === 2
                  ) && (
                    <Link href={`/jobs/${job.id}/proposals`} passHref>
                      <S.Button>Propostas</S.Button>
                    </Link>
                  )}
                {!job.totalProposals && (
                  <Link href={`/jobs/${job.id}/update`} passHref>
                    <S.Button>Editar</S.Button>
                  </Link>
                )}
              </>
            )}
            {job.status === "FIRST_DELIVERY" && job.totalChanges === 0 && (
              <>
                <S.Button onClick={handleSeeJob}>Entrega</S.Button>
                <S.Button onClick={handleSendChanges}>Alterações</S.Button>
              </>
            )}
            {job.status === "FINAL_DELIVERY" && (
              <>
                {!job.wasEvaluated && (
                  <S.Button onClick={() => handleSendReview()}>
                    Avaliar
                  </S.Button>
                )}
                <S.Button onClick={() => handleSeeJob()}>Entrega</S.Button>
              </>
            )}
          </>
        )}

        {user?.type === "EDITOR" && (
          <>
            {job.status === "PUBLISHED" && job.totalProposals === 0 && (
              <>
                <S.Button onClick={() => handleAcceptJob()}>Aceitar</S.Button>
                <S.Button onClick={() => handleSendCounterProposal()}>
                  Proposta
                </S.Button>
              </>
            )}

            {!!job.proposals.find(
              (proposal) =>
                proposal.user.id === user?.id && proposal.status.id === 2
            ) && (
              <>
                {job.status === "ACCEPTED_EDITOR" && (
                  <S.Button onClick={() => handleStartJob()}>Iniciar</S.Button>
                )}
                {job.status === "IN_PROGRESS" && (
                  <>
                    <S.Button onClick={() => handleJobDelivery()}>
                      Entregar
                    </S.Button>

                    {!currentCharge && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={handleProblem(job.id)}
                      >
                        <S.Button>Problema</S.Button>
                      </a>
                    )}

                    {currentCharge && (
                      <S.Button
                        onClick={() => handleCharge()}
                        className="changes"
                      >
                        Cobrança
                      </S.Button>
                    )}
                  </>
                )}
                {job.status === "REQUEST_CHANGE" && (
                  <>
                    <S.Button onClick={() => handleJobDelivery()}>
                      Entregar
                    </S.Button>
                    <S.Button onClick={() => handleSeeChanges()}>
                      Alterações
                    </S.Button>
                  </>
                )}
                {job.status === "FINAL_DELIVERY" && job.wasEvaluated && (
                  <S.Button onClick={() => handleSeeRating()}>
                    Ver avaliação
                  </S.Button>
                )}
              </>
            )}
          </>
        )}
      </S.FooterContainer>
    </S.Wrapper>
  );
}

export { JobCard };
