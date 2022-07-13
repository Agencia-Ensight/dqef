import { ButtonKnewave } from "../../components/ButtonKnewave";
import { useQuery } from "@apollo/client";

import Router, { useRouter } from "next/router";

import * as S from "./styles";
import { MultiStepForm } from "../../components/MultiStepForm";
import {
  HigherCoursesData,
  HIGHER_COURSES,
  Job,
  JobTypesData,
  JOB_TYPES,
  KNOWLEDGES,
  KnowledgesData,
} from "../../queries/jobs";
import JobStep1 from "../components/jobs/JobSteps/step1";

export default function proposalstudentstep1() {
  const router = useRouter();

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
            Router.push("/proposalstudentstep2");
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
          <h6>
            Atenção! É expressamente proibido o compartilhamento de informações
            pessoais entre os usuários. Tal prática está sujeita ao banimento
            imediato de ambos os usuários por tempo indeterminado da plataforma.
          </h6>
          <JobStep1
            jobTypes={jobTypes?.job_types ?? []}
            higherCourses={higherCourses?.higher_courses ?? []}
            knowledges={knowledges?.knowledges ?? []}
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
