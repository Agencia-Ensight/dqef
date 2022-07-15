import Router from "next/router";
import { useQuery } from "@apollo/client";

import { UrgentWorkCard } from "@/components";
import { GET_JOBS, Job } from "@/services/graphql/jobs";
import * as S from "./styles";

function AllWorks() {
  const jobs = useQuery<{ jobs: Job[] }>(GET_JOBS);

  return (
    <S.Wrapper>
      <S.SubTitle onClick={() => Router.back()}>Voltar</S.SubTitle>
      <S.Title>Lista de Trabalhos</S.Title>
      <S.HeaderContainer>
        <S.Description>
          Se liga nas ofertas incríveis que estão disponíveis para você realizar
          e tirar uma grana extra!
        </S.Description>
      </S.HeaderContainer>
      <S.MainContainer>
        {jobs.data?.jobs.map((job) => (
          <UrgentWorkCard
            jobId={job.id}
            course="ECONOMIA" // higher_course_name TODO: Sincronizar com o banco de dados?
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
    </S.Wrapper>
  );
}

export default AllWorks;
