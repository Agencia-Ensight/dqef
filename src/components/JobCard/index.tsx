import Link from "next/link";

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
            <S.Date urgent={job.urgent}>{job.date}</S.Date>
          </S.InformationContainer>
          {job.type === "editor" &&
            job.status === "published" &&
            job.state === "waiting-payment" && (
              <S.WaitStudent>Aguardando Estudante...</S.WaitStudent>
            )}

          {job.type === "editor" &&
            job.status === "on-going" &&
            job.state === "changes" && (
              <S.WaitStudent>Responda a cobrança!</S.WaitStudent>
            )}
        </S.MainContainer>
      </S.Container>
      <S.FooterContainer>
        <Link href={`/jobs/${job.id}`}>
          <S.Button variant="secondary">Ver mais</S.Button>
        </Link>

        {/* Show Feedback button to editor */}
        {job.type === "editor" &&
          job.status === "finished" &&
          job.state === "show-feedback" && <S.Button>Ver Feedback</S.Button>}

        {/* Show problem button to editor */}
        {job.type === "editor" &&
          job.status === "on-going" &&
          job.state === "report-problem" && (
            <S.Button className="changes">Problema</S.Button>
          )}

        {/* Editor Proposals */}
        {job.type === "editor" && job.status === "want-to-do" && (
          <>
            <S.Button>Aceitar Valor</S.Button>
            <S.Button>Contraproposta</S.Button>
          </>
        )}

        {/* Editor Start Job */}
        {job.type === "editor" &&
          job.status === "want-to-do" &&
          job.state === "start-job" && <S.Button>Iniciar trabalho</S.Button>}

        {/* Show change button to editor */}
        {(job.type === "editor" &&
          job.status === "on-going" &&
          (job.state === "changes" || job.state === "requested-changes")) ||
          (job.type === "student" &&
            job.status === "on-going" &&
            job.state === "request-changes" && (
              <S.Button variant="tertiary">Alterações</S.Button>
            ))}

        {/* Show rate button to student */}
        {job.type === "student" &&
          job.status === "finished" &&
          job.state === "editor-rate" && (
            <S.Button className="rate">Avaliar</S.Button>
          )}

        {/* Show proposals button to student */}
        {job.type === "student" &&
          job.status === "published" &&
          job.state === "show-proposals" && <S.Button>Ver propostas</S.Button>}
      </S.FooterContainer>
    </S.Wrapper>
  );
}

export { JobCard };
