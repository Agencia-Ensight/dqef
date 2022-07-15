import { useQuery } from "@apollo/client";

import * as S from "./styles";

import { UrgentWorkCard } from "@/components";
import { GET_URGENT_JOBS, Job } from "@/services/graphql/jobs";

function UrgentWorks() {
  const urgentJobs = useQuery<{ jobs: Job[] }>(GET_URGENT_JOBS);

  return (
    <S.Wrapper>
      <S.SubTitle>IMPORTANTE</S.SubTitle>
      <S.HeaderContainer>
        <div>
          <S.Title>Trabalhos Urgentes</S.Title>
          <S.Description>
            Atividades com menos de 48h para a entrega final. Somente redatores
            premium possuem permissão para realizar.
          </S.Description>
        </div>
      </S.HeaderContainer>
      <S.MainContainer>
        {urgentJobs.data?.jobs.map((urgentJob, index) => (
          <UrgentWorkCard
            key={index}
            jobId={urgentJob.id}
            course="ECONOMIA"
            date={urgentJob.delivery}
            discipline={urgentJob.job_has_knowledges[0]?.knowledge.name}
            price={urgentJob.value_pay}
            theme={urgentJob.theme}
            title={urgentJob.title}
            typeOfWork={urgentJob.job_format.name}
            urgent={true}
            status="EMPLOYEE-SEE"
          />
        ))}
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default UrgentWorks;
