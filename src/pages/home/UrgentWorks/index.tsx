import { ButtonKnewave } from "../../../components/ButtonKnewave";
import { UrgentWorkCard } from "../../../components/UrgentWorkCard";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { getUrgentJobs, IGetUrgentJobs } from "../../../services/job";

export function UrgentWorks() {
  const [urgentJobs, setUrgentJobs] = useState<IGetUrgentJobs[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await getUrgentJobs();
        setUrgentJobs(response);
      } catch (error) {
        console.log(error);
      }
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
        {urgentJobs.map((job) => (
          <UrgentWorkCard
            jobId={job.id}
            course="ARQUITETURA"
            date={job.delivery}
            discipline={job.higher_course.name}
            price={job.value_pay}
            theme="banana"
            title={job.title}
            typeOfWork="Banana"
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
