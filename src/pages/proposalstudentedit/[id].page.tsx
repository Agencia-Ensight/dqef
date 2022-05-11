import { ButtonKnewave } from "../../components/ButtonKnewave";
import { useQuery } from "@apollo/client";

import { useRouter } from "next/router";

import * as S from "./styles";
import { HigherCoursesData, HIGHER_COURSES, Job, JobByPk, JobFormatsData, JobTypesData, JOB_FORMATS, JOB_QUERY, JOB_TYPES, KNOWLEDGES, KnowledgesData, UPDATE_JOB_BY_PK } from "../../queries/jobs";
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

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());


    const payload: any = {
      higher_course_id: data.higher_course_id,
      job_type_id: data.job_type_id,
      job_format_id: data.job_format_id,
      instructions: data.instructions,
      title: data.title,
      value: data.value,
      value_pay: data.value,
      date_limit: data.date_limit,
      // delivery: new Date(),
      theme: data.theme,
      pages: data.pages,
      words: data.words,
    }

    const knowledges = [{
      knowledge_id: data.knowledge_id,
      job_id: router.query.id,
    }];

    // Remove empty null or undefined values
    Object.keys(payload).forEach(key => {
      if (payload[key] === null || payload[key] === undefined || payload[key] === "") {
        delete payload[key];
      }
    });

    // Update job
    apolloClient.mutate({
      mutation: UPDATE_JOB_BY_PK,
      variables: {
        id: router.query.id,
        object: payload,
        knowledges: knowledges
      }
    }).then(() => {
      alert("Job updated");
    });
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <form onSubmit={handleUpdate}>
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
        </form>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentedit.auth = true;