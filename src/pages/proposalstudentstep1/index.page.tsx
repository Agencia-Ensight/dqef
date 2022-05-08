import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Input } from "../../components/Input";
import { Select } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import Router, { useRouter } from "next/router";

import * as S from "./styles";
import { MultiStepForm } from "../../components/MultiStepForm";
import { HigherCoursesData, HIGHER_COURSES, Job, JobTypesData, JOB_TYPES, KNOWLEDGES, KnowledgesData } from "../../queries/jobs";
import { useEffect } from "react";

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
          <S.InputFields>
            <S.FirstInputContainer>
              <Input
                label="Título do trabalho"
                name="title"
                placeholder="Insira o título"
                defaultValue={job?.title}
                mandatory={true}
                required
              />
              <S.SelectContainer>
                <label>
                  Tipo do Trabalho<span>*</span>
                </label>
                <Select className="padrao" placeholder="Tipo do Trabalho" name="job_type_id" defaultValue={job?.job_type?.id}>
                  {
                    jobTypes?.job_types.map((jobType) => (
                      <option key={jobType.id} value={jobType.id} selected={jobType.id === job?.job_type?.id}>
                        {jobType.name}
                      </option>
                    ))
                  }
                </Select>
              </S.SelectContainer>
            </S.FirstInputContainer>
            <S.TextInputContainer>
              <S.SelectContainer>
                <label>
                  Curso do Trabalho<span>*</span>
                </label>
                <Select className="padrao" placeholder="Curso do Trabalho" name="higher_course_id" defaultValue={job?.higher_course?.id}>
                  {
                    higherCourses?.higher_courses.map((higherCourse) => (
                      <option key={higherCourse.id} value={higherCourse.id} selected={higherCourse.id === job?.higher_course?.id}>
                        {higherCourse.name}
                      </option>
                    ))
                  }
                </Select>
              </S.SelectContainer>
              <S.SelectContainer>
                <label>
                  Disciplina do Trabalho<span>*</span>
                </label>
                <Select className="padrao" placeholder="Disciplina do Trabalho" name="knowledge_id">
                  {
                    knowledges?.knowledges.map((knowledge) => (
                      <option key={knowledge.id} value={knowledge.id} selected={!!job?.job_has_knowledges?.find((jobKnowledge) => jobKnowledge.knowledge.id === knowledge.id)}>
                        {knowledge.name}
                      </option>
                    ))
                  }
                </Select>
              </S.SelectContainer>
              <Input
                className="type-of-work"
                placeholder="Tema do Trabalho"
                label="Tema do Trabalho"
                mandatory={true}
                required
                name="theme"
                defaultValue={job?.theme}
              />
            </S.TextInputContainer>
            <label>
              Instruções<span>*</span>
            </label>
            <textarea
              name="instructions"
              id="instructions"
              rows={5}
              placeholder="ex: Descrição do que deve ser feito no trabalho. Explique de forma objetiva e clara, tudo que o redator deverá realizar para você. Coloque as informações importantes para o melhor entendimento do trabalho."
              defaultValue={job?.instructions}
            ></textarea>
            <S.LastInputs>
              <Input
                label="Número de páginas"
                placeholder="Quantidade"
                required
                name="pages"
                defaultValue={job?.pages}
              />
              <Input
                label="Número de palavras"
                placeholder="Quantidade"
                required
                name="words"
                defaultValue={job?.words}
              />
            </S.LastInputs>
          </S.InputFields>
          <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
            Próximo
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentstep1.auth = true;