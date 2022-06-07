import { useEffect, useState } from "react";
import { ButtonKnewave } from "../../../components/ButtonKnewave";
import { UrgentWorkCard } from "../../../components/UrgentWorkCard";
import { getUrgentJobs, IJob } from "../../../services/job";
import * as S from "./styles";

export function UrgentWorks() {
  const [urgentJobs, setUrgentJobs] = useState<IJob[]>([]);

  useEffect(() => {
    (async () => {
      const currentUrgentJobs = await getUrgentJobs();
      setUrgentJobs(currentUrgentJobs);
    })();
  }, []);

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
        {urgentJobs.map((urgentJob, index) => (
          <UrgentWorkCard
            key={index}
            jobId={urgentJob.id}
            course="ECONOMIA"
            date={urgentJob.delivery}
            discipline={urgentJob.job_has_knowledges[0].knowledge.name}
            price={urgentJob.value_pay}
            theme={urgentJob.theme}
            title={urgentJob.title}
            typeOfWork={urgentJob.job_format.name}
            urgent={true}
            status="EMPLOYEE-SEE"
          />
        ))}
      </S.MainContainer>
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size="lg">
          <a href="/urgent-works">Ver Todos</a>
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
