import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, Select as SelectReact } from "@chakra-ui/react";
import { Input } from "../../components/Input";
import Router from "next/router";
import { MultiStepForm } from "../../components/MultiStepForm";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import {
  getCourses,
  getFormations,
  getKnowledges,
  ICourse,
  IFormation,
  IKnowledge,
} from "../../services/auth";
import InputMask from "react-input-mask";
import { MultiSelect } from "./MultiSelect";

export default function signinredatorstep2() {
  const [courses, setCourses] = React.useState<ICourse[]>([]);
  const [formations, setFormations] = React.useState<IFormation[]>([]);
  const [knowledges, setKnowledges] = React.useState<IKnowledge[]>([]);

  const router = useRouter();

  useEffect(() => {
    async function loadCourses() {
      const res = await getCourses();
      setCourses(res);
    }

    async function loadFormations() {
      const res = await getFormations();
      setFormations(res);
    }

    async function loadKnowledges() {
      const res = await getKnowledges();
      setKnowledges(res);
    }

    loadCourses();
    loadFormations();
    loadKnowledges();
  }, []);

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>
      <S.ContainerInformation>
        <MultiStepForm
          stateName="signupData"
          onSubmit={(_) => {
            Router.push("/signinredatorstep4");
          }}
          onFail={() => {
            Router.push("/signinredatorstep1");
          }}
        >
          <a onClick={() => router.back()}>Voltar</a>
          <h1>Informações Extras</h1>
          <p>Insira alguns dados para completar o seu cadastro.</p>

          <S.InputContainer>
            <h3>Curso</h3>
            <SelectReact name="course" placeholder="Selecione da nossa lista">
              {courses.map((course: ICourse) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </SelectReact>
            <h3>Áreas de conhecimento</h3>
            <SelectReact name="college" placeholder="Selecione da nossa lista">
              {knowledges.map((knowledge: IKnowledge) => (
                <option key={knowledge.id} value={knowledge.id}>
                  {knowledge.name}
                </option>
              ))}
            </SelectReact>
            <MultiSelect />
            <h3>Formação</h3>
            <SelectReact name="formation" placeholder="Selecione">
              {formations.map((formation: IFormation) => (
                <option key={formation.id} value={formation.id}>
                  {formation.name}
                </option>
              ))}
            </SelectReact>
            {/* <Input name="cpf" label="CPF" placeholder="000.000.000-00" /> */}
            {/* TODO */}
            <h3>CPF</h3>
            <InputMask
              placeholder="000.000.000-00"
              mask="999.999.999-99"
              className="cpf-input"
              name="cpf"
            />
            <Input
              label="Forma de Pagamento"
              placeholder="Insira o seu pix ou dados de pagamento"
            />
          </S.InputContainer>
          <S.ContainerDoBang>
            <Checkbox required>Aceitar Termos de Uso</Checkbox>
          </S.ContainerDoBang>
          <S.ContainerDoBang>
            <Checkbox required>Aceitar Políticas de Privacidade</Checkbox>
          </S.ContainerDoBang>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Confirmar e-mail
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
