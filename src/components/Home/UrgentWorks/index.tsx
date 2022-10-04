import Link from "next/link";

import { ButtonKnewave, JobCard, Loading } from "@/components";
import * as S from "./styles";
import { useTopUrgentJobs } from "@/hooks";

function UrgentWorks() {
  const urgentJobs = useTopUrgentJobs();

  console.log(urgentJobs.data)

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
        {urgentJobs.isLoading && <Loading />}
        {urgentJobs.error && <p>Não conseguimos carregar esse módulo</p>}
        {urgentJobs.data?.map((urgentJob) => (
          <JobCard
            {...urgentJob}
            totalProposals={urgentJob.proposals.length}
            totalChanges={0}
            wasEvaluated={!!urgentJob.rating}
            urgent
            mediaType={urgentJob.format.name}
            knowledges={urgentJob.knowledges.map((knowledge) => knowledge.name)}
            course={urgentJob.higherCourse.name}
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
