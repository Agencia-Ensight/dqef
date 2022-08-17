import * as S from "./styles";

import { JobCard } from "@/components";
import { useUrgentJobs } from "@/hooks";

function UrgentWorks() {
  const urgentJobs = useUrgentJobs();

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
        {urgentJobs.data?.map((job) => (
          <JobCard
            {...job}
            totalProposals={job.proposals.length}
            totalChanges={0}
            wasEvaluated={!!job.rating}
            urgent
            typeOfWork={job.typeOfWork.name}
            knowledges={job.knowledges.map((knowledge) => knowledge.name)}
            course={job.higherCourse.name}
          />
        ))}
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default UrgentWorks;
