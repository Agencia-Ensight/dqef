import { useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import { format } from "date-fns";

import * as S from "./styles";
import { ICardProps } from "./typings";
import { useUpdateJobStatus } from "@/hooks";
import { useToast, useModal, useUser } from "@/contexts";
import { ModalRating } from "./components/ModalRating";
import { ModalOpenWork } from "./components/ModalOpenWork";
import { ModalStartJob } from "./components/ModalStartJob";
import { ModalCharge } from "./components/ModalCharge";
import { ModalProposalInfo } from "./components/ModalProposalInfo";
import { ModalCounterProposal } from "./components/ModalCounterProposal";
import { ModalSendJob } from "./components/ModalSendJob";
import { ModalSeeChanges } from "./components/ModalSeeChanges";
import { ModalSeeRating } from "./components/ModalSeeRating";
import { ModalSeeJob } from "./components/ModalSeeJob";

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

  // const handlePartialDelivery = useCallback(async () => {
  //   try {
  //     await updateJobStatus(job.id, "partial-delivery");
  //     addToast({ type: "success", msg: "Entrega realizada!" });
  //   } catch (error) {
  //     addToast({
  //       type: "error",
  //       msg: "Não conseguimos entregar o trabalho, tente novamente mais tarde",
  //     });
  //   }
  // }, [addToast, updateJobStatus, job.id]);

  // const handleStartJob = useCallback(async () => {
  //   try {
  //     await updateJobStatus(job.id, "in-progress");
  //     addToast({ type: "success", msg: "Trabalho iniciado!" });
  //   } catch (error) {
  //     addToast({
  //       type: "error",
  //       msg: "Não conseguimos iniciar o trabalho, tente novamente mais tarde",
  //     });
  //   }
  // }, [addToast, updateJobStatus, job.id]);

  const handleSendAvaliation = useCallback(() => {}, []);

  function handleSendReview() {
    open(`Olá, ${user?.name}`, { content: () => <ModalRating /> });
  }

  function handleJobDelivery() {
    open("Deseja enviar o trabalho?", {
      content: () => (
        <ModalSendJob
          acceptPlagiarism={20} //TODO
          plagiarismOfJob={20} //TODO
          dateLimitOfRequestChanges={new Date()} //TODO
        />
      ),
    });
  }

  function handleSendCounterProposal() {
    open("Alterar Valor", { content: () => <ModalCounterProposal /> });
  }

  function handleAcceptJob() {
    open(
      "Olá, redator! Ficamos felizes pelo seu interesse em um dos trabalhos publicados ",
      { content: () => <ModalProposalInfo /> }
    );
  }

  function handleSeeChanges() {
    open(`Olá, ${user?.name}. Essas são as alterações solicitadas`, {
      content: () => (
        <ModalSeeChanges
          dateOfTheFinalAdjust={new Date()} //TODO
          obs="teste 1" //TODO
        />
      ),
    });
  }

  function handleCharge() {
    open(`Olá, ${user?.name}`, {
      content: () => (
        <ModalCharge
          dateOfDelivery={new Date()} //TODO
        />
      ),
    });
  }

  function handleSeeJob() {
    open(`Olá, ${user?.name}`, {
      content: () => (
        <ModalSeeJob
          isFirstDelivery={true} //TODO
          dateOfChanges={new Date()} //TODO
        />
      ),
    });
  }

  function handleStartJob() {
    open(`Negócio Fechado!`, {
      content: () => (
        <ModalStartJob
          dateOfDelivery={
            new Date() // TODO
          }
          dateFirstCharge={new Date()} //TODO
          dateSecondCharge={new Date()} //TODO
          dateThirdCharge={new Date()} //TODO
        />
      ),
    });
  }

  function handleSeeRating() {
    open("Feedback do Estudante", {
      content: () => (
        <ModalSeeRating
          obs="banana" //TODO
          rating={20} //TODO
        />
      ),
    });
  }

  const handleSeeAvaliation = useCallback(() => {}, []);

  // const handleSeeChanges = useCallback(() => {}, []);

  const handleSendChanges = useCallback(() => {}, []);

  // const handleAcceptJob = useCallback(async () => {
  //   try {
  //     await updateJobStatus(job.id, "ready-to-start");
  //     addToast({ type: "success", msg: "Trabalho aceito!" });
  //   } catch (error) {
  //     addToast({
  //       type: "error",
  //       msg: "Erro ao aceitar o trabalho, tente novamente mais tarde",
  //     });
  //   }
  // }, [addToast, updateJobStatus, job.id]);

  // const handleSendCounterProposal = useCallback(() => {}, []);

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
                <S.Button onClick={handleJobDelivery}>Entrega</S.Button>
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
                  <S.Button
                    onClick={() =>
                      // handleSeeDelivery()
                      handleSeeJob()
                    }
                  >
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
              <S.Button
                onClick={() =>
                  // handleStartJob()
                  handleStartJob()
                }
              >
                Iniciar
              </S.Button>
            )}
            {job.status === "in-progress" && (
              <>
                <S.Button
                  onClick={() =>
                    // handlePartialDelivery()
                    handleJobDelivery()
                  }
                >
                  Entregar
                </S.Button>
                <Link href={`/jobs/${job.id}`} passHref>
                  <S.Button>Ver mais</S.Button>
                </Link>
                <S.Button onClick={() => handleProblem(job.id)}>
                  Problema
                </S.Button>
                {/* TODO */}
                <S.Button onClick={() => handleCharge()}>Cobrança</S.Button>
              </>
            )}
            {job.status === "partial-delivery" && job.totalChanges > 0 && (
              <>
                <S.Button
                  onClick={() =>
                    // handlePartialDelivery()

                    handleJobDelivery()
                  }
                >
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
                <S.Button onClick={() => handleSeeRating()}>
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
