import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Input } from "../../components/Input";
import { Select } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import Router, { useRouter } from "next/router";

import * as S from "./styles";
import { MultiStepForm } from "../../components/MultiStepForm";
import { HigherCoursesData, HIGHER_COURSES, JobTypesData, JOB_TYPES, KNOWLEDGES, KnowledgesData } from "../../queries/jobs";

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
          <S.InputFields>
            <S.FirstInputContainer>
              <Input
                label="Título do trabalho"
                name="title"
                placeholder="Insira o título"
                mandatory={true}
                required
              />
              <S.SelectContainer>
                <label>
                  Tipo do Trabalho<span>*</span>
                </label>
                <Select className="padrao" placeholder="Tipo do Trabalho" name="job_type_id">
                  {
                    jobTypes?.job_types.map((jobType) => (
                      <option key={jobType.id} value={jobType.id}>
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
                <Select className="padrao" placeholder="Curso do Trabalho" name="higher_course_id">
                  {
                    higherCourses?.higher_courses.map((higherCourse) => (
                      <option key={higherCourse.id} value={higherCourse.id}>
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
                      <option key={knowledge.id} value={knowledge.id}>
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
            ></textarea>
            <S.LastInputs>
              <Input
                label="Número de páginas"
                placeholder="Quantidade"
                required
                name="pages"
              />
              <Input
                label="Número de palavras"
                placeholder="Quantidade"
                required
                name="words"
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