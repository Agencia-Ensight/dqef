import Link from "next/link";

import { useQuery } from "@apollo/client";

import { ButtonKnewave, JobCard } from "@/components";
import { GET_TOP_10_URGENT_JOBS, Job } from "@/services/graphql/jobs";

import * as S from "./styles";

function UrgentWorks() {
  const urgentJobs = useQuery<{ jobs: Job[] }>(GET_TOP_10_URGENT_JOBS);

  return (
    <S.Wrapper>
      <S.SubTitle>IMPORTANTE</S.SubTitle>
      <S.Title>Trabalhos Urgentes</S.Title>
      <S.HeaderContainer>
        <S.Description>
          Atividades com menos de 48h para a entrega final. Somente redatores
          premium possuem permissão para realizar.
        </S.Description>
      </S.HeaderContainer>
      <S.MainContainer>
        {urgentJobs.loading && <p>Carregando...</p>}
        {urgentJobs.error && <p>Não conseguimos carregar esse módulo</p>}
        {urgentJobs.data?.jobs.map((urgentJob, index) => (
          <JobCard
            key={index}
            id={urgentJob.id}
            course={urgentJob.higher_course.name}
            date={urgentJob.delivery}
            discipline={urgentJob.job_has_knowledges[0]?.knowledge.name}
            price={urgentJob.value_pay}
            theme={urgentJob.theme}
            title={urgentJob.title}
            typeOfWork={urgentJob.job_format.name}
            urgent
          />
        ))}
      </S.MainContainer>
      <S.ButtonContainer>
        <Link href="/jobs/urgents" passHref>
          <ButtonKnewave variant="PRIMARY" size="lg">
            Ver Todos
          </ButtonKnewave>
        </Link>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export { UrgentWorks };
