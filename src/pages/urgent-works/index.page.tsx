import * as S from "./styles";

import { UrgentWorkCard } from "../../components/UrgentWorkCard";
import { useEffect, useState } from "react";

import { getUrgentJobs, IGetUrgentJobs } from "../../services/job";

function urgentWorks() {
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
        {urgentJobs.map((job, index) => (
          <UrgentWorkCard
            key={index}
            jobId={job.id}
            course="ECONOMIA"
            date={job.delivery}
            discipline={job.job_has_knowledges[0].knowledge.name}
            price={job.value_pay}
            theme="banana"
            title={job.title}
            typeOfWork="bananan"
            urgent={true}
            status="EMPLOYEE-SEE"
          />
        ))}
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default urgentWorks;
