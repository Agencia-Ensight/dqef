import { ButtonKnewave } from "../../components/ButtonKnewave";
import { useQuery } from "@apollo/client";

import Router, { useRouter } from "next/router";

import * as S from "./styles";
import { MultiStepForm } from "../../components/MultiStepForm";
import { HigherCoursesData, HIGHER_COURSES, Job, JobTypesData, JOB_TYPES, KNOWLEDGES, KnowledgesData } from "../../queries/jobs";
import { useEffect } from "react";
import JobStep1 from "../components/jobs/JobSteps/step1";

export default function proposalstudentstep1(job?: Job) {
  const router = useRouter();

  useEffect(() => {
    console.log(job);
  }, []);

  const { data: jobTypes } = useQuery<JobTypesData>(JOB_TYPES);
  const { data: higherCourses } = useQuery<HigherCoursesData>(HIGHER_COURSES);
  const { data: knowledges } = useQuery<KnowledgesData>(KNOWLEDGES);

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <MultiStepForm
          firstStep={true}
          stateName="proposalData"
          onSubmit={(_) => {
            if (job) {
              router.push(`/proposalstudentstep2/${job.id}`);
            } else {
              Router.push("/proposalstudentstep2");
            }
          }}
          onFail={() => {
            Router.push("/proposalstudentstep1");
          }}
        >
          <a onClick={() => router.back()}>Voltar</a>
          <S.HeaderContainer>
            <h1>Preencha os Campos</h1>
            <S.Steps>1 de 3</S.Steps>
          </S.HeaderContainer>

          <p>Para publicar seu trabalho, insira as seguintes informações.</p>
          <JobStep1 
            job={job}
            jobTypes={jobTypes ?? { job_types: [] }}
            higherCourses={higherCourses ?? { higher_courses: [] }}
            knowledges={knowledges ?? { knowledges: [] }}
          />
          <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
            Próximo
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentstep1.auth = true;