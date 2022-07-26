import { useQuery } from "@apollo/client";

import { ButtonKnewave, JobCard } from "@/components";
import { GET_TOP_10_JOBS, Job } from "@/services/graphql/jobs";
import * as S from "./styles";

function Works() {
  const jobs = useQuery<{ jobs: Job[] }>(GET_TOP_10_JOBS);

  return (
    <S.Wrapper>
      <S.SubTitle>PADRÃO</S.SubTitle>
      <S.Title>Lista de Trabalhos</S.Title>
      <S.HeaderContainer>
        <S.Description>
          Se liga nas ofertas incríveis que estão disponíveis para você realizar
          e tirar uma grana extra!
        </S.Description>
      </S.HeaderContainer>
      <S.MainContainer>
        {jobs.loading && <p>Carregando...</p>}
        {jobs.error && <p>Não conseguimos carregar esse módulo</p>}
        {jobs.data?.jobs.map((job) => (
          <JobCard
            jobId={job.id}
            course={job.higher_course.name} // higher_course_name TODO: Sincronizar com o banco de dados?
            date={job.delivery}
            discipline={job.job_has_knowledges
              .map(({ knowledge: { name: knowledge_name } }) => knowledge_name)
              .join(", ")}
            price={job.value_pay}
            theme={job.theme}
            title={job.title}
            typeOfWork={job.job_type.name}
            urgent={false} // TODO:Como pegar do banco
            status="EMPLOYEE-SEE" // TODO: Sincronizar com o banco de dados?
          />
        ))}
      </S.MainContainer>
      <S.ButtonContainer>
        <ButtonKnewave size="lg" variant="PRIMARY">
          <a href="/all-works">Ver Todos</a>
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export { Works };
