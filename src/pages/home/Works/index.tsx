import { gql, useQuery } from "@apollo/client";
import { ButtonKnewave } from "../../../components/ButtonKnewave";
import { UrgentWorkCard } from "../../../components/UrgentWorkCard";
import { JobData, JOBS_QUERY } from "../../../queries/jobs";

import * as S from "./styles";

const Jobs = (): JSX.Element => {
  const { loading, error, data } = useQuery<JobData>(JOBS_QUERY);


  if (loading) return <p>Loading...</p >;
  if (error) return <p>Error: {error.message}</p>;

  return <>
    {
      data!.jobs.map(({ value_pay, title, theme, job_type: { name: job_type_name }, higher_course: { name: higher_course_name }, delivery, job_has_knowledges }) => (
        <UrgentWorkCard
          course="ECONOMIA" // higher_course_name TODO: Sincronizar com o banco de dados?
          date={delivery}
          discipline={job_has_knowledges.map(({ knowledge: { name: knowledge_name } }) => knowledge_name).join(", ")}
          price={value_pay}
          theme={theme}
          title={title}
          typeOfWork={job_type_name}
          urgent={false} // TODO: Como pegar do banco de dados
          status="EMPLOYEE-SEE" // TODO: Sincronizar com o banco de dados?
        />
      ))
    }
  </>
}

export function Works() {
  return (
    <S.Wrapper>
      <S.SubTitle>PADRÃO</S.SubTitle>
      <S.Title>Lista de Trabalhos</S.Title>
      <S.HeaderContainer>
        <S.Description>
          Se liga nas ofertas incríveis que estão disponíveis para você realizar
          e tirar uma grana extra!
        </S.Description>
      </S.HeaderContainer>
      <S.MainContainer>
        <Jobs />
      </S.MainContainer>
      <S.ButtonContainer>
        <ButtonKnewave size="lg" variant="PRIMARY">
          <a href="/all-works">Ver Todos</a>
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
