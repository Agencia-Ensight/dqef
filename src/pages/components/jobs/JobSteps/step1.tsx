import { Select } from "@chakra-ui/react";
import { Input } from "../../../../components/Input";
import { HigherCourse, HigherCoursesData, Job, JobType, JobTypesData, Knowledges, KnowledgesData } from "../../../../queries/jobs";
import * as S from "./styles1";

const JobStep1 = ({
    job,
    jobTypes,
    higherCourses,
    knowledges,
}: {
    job?: Job;
    jobTypes: JobType[];
    higherCourses: HigherCourse[];
    knowledges: Knowledges[];
}) => {
    return (
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
                    jobTypes?.map((jobType) => (
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
                    higherCourses?.map((higherCourse) => (
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
                    knowledges?.map((knowledge) => (
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
    );
}

export default JobStep1;