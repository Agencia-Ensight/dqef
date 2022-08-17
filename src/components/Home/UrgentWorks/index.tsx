import Link from "next/link";

import { ButtonKnewave, JobCard } from "@/components";

import * as S from "./styles";
import { useUrgentJobs } from "@/hooks";
import { useUser } from "@/contexts";
import { CardStatus } from "@/components/JobCard/typings";

function UrgentWorks() {
  const urgentJobs = useUrgentJobs();
  const { user } = useUser();

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
        {urgentJobs.isLoading && <p>Carregando...</p>}
        {urgentJobs.error && <p>Não conseguimos carregar esse módulo</p>}
        {urgentJobs.data?.map((urgentJob) => (
          <JobCard
            key={urgentJob.id}
            {...urgentJob}
            type={user?.type}
            totalProposals={0}
            totalChanges={0}
            wasEvaluated={false}
            typeOfWork={urgentJob.typeOfWork.name}
            status={urgentJob.status}
            course={urgentJob.higherCourse.name}
            knowledges={urgentJob.knowledges.map((knowledge) => knowledge.name)}
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
