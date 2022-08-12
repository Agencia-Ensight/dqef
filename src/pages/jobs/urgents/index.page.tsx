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
            key={job.id}
            {...job}
            type="student" // TODO: check how to do this
            status="finished" // TODO: check how to do this
            discipline={job.discipline.name}
            typeOfWork={job.typeOfWork.name}
          />
        ))}
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default UrgentWorks;
