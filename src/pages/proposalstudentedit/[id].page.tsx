import { ButtonKnewave } from "../../components/ButtonKnewave";
import { useQuery } from "@apollo/client";

import { useRouter } from "next/router";

import * as S from "./styles";
import { HigherCoursesData, HIGHER_COURSES, Job, JobByPk, JobFormatsData, JobTypesData, JOB_FORMATS, JOB_QUERY, JOB_TYPES, KNOWLEDGES, KnowledgesData } from "../../queries/jobs";
import { useEffect, useState } from "react";
import { apolloClient } from "../../services/api";
import JobStep1 from "../components/jobs/JobSteps/step1";
import JobStep2 from "../components/jobs/JobSteps/step2";
import JobStep3 from "../components/jobs/JobSteps/step3";

export default function proposalstudentedit() {
  const [job, setJob] = useState<Job | undefined>(undefined);

  const { data: jobTypes } = useQuery<JobTypesData>(JOB_TYPES);
  const { data: higherCourses } = useQuery<HigherCoursesData>(HIGHER_COURSES);
  const { data: knowledges } = useQuery<KnowledgesData>(KNOWLEDGES);
  const { data: jobFormats } = useQuery<JobFormatsData>(JOB_FORMATS);

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      apolloClient.query({
        query: JOB_QUERY,
        variables: {
          id: router.query.id
        }
      }).then(({ data }: { data: JobByPk }) => {
        setJob(data.jobs_by_pk);
      })
    }
  }, [router.query, router.isReady]);



  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => router.back()}>Voltar</a>
        <S.HeaderContainer>
          <h1>Preencha os Campos</h1>
        </S.HeaderContainer>

        <p>Edite os campos desejados e salve no final da página.</p>
        <JobStep1
          jobTypes={jobTypes?.job_types ?? []}
          higherCourses={higherCourses?.higher_courses ?? []}
          knowledges={knowledges?.knowledges ?? []}
          job={job}
        />

        <S.HeaderContainer>
          <h1>Informações de Entrega</h1>
        </S.HeaderContainer>
        <JobStep2 job={job} />

        <S.HeaderContainer>
          <h1>Informações Extras</h1>
        </S.HeaderContainer>
        <JobStep3 job={job} jobFormats={jobFormats?.job_formats ?? []} />
        <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
          Salvar
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentedit.auth = true;