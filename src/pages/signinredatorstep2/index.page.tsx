import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, Select } from "@chakra-ui/react";
import { Input } from "../../components/Input";
import Router from "next/router";
import { MultiStepForm } from "../../components/MultiStepForm";
import React, { useEffect } from "react";
import { getCourses, ICourse } from "../../services/auth";

export default function signinredatorstep2() {
  const [courses, setCourses] = React.useState<ICourse[]>([]);

  useEffect(() => {
    async function loadCourses() {
      const res = await getCourses();
      setCourses(res);
    }
    
    loadCourses();
  }, []);

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>
      <MultiStepForm
        stateName="signupData"
        onSubmit={(_) => {
          Router.push("/signinredatorstep3");
        }}
        onFail={() => {
          Router.push("/signinredatorstep1");
        }}
      >
        <S.ContainerInformation>
          <a href="#">Voltar</a>
          <h1>Informações Extras</h1>
          <p>Insira alguns dados para completar o seu cadastro.</p>

          <S.InputContainer>
            <h3>Curso</h3>
            <Select name="course" placeholder="Selecione da nossa lista">
              {
                courses.map((course: ICourse) => (
                  <option key={course.id} value={course.id}>{course.name}</option>
                ))
              }
            </Select>
            <h3>Áreas de conhecimento</h3>
            <Select name="college" placeholder="Selecione da nossa lista">
              <option value={1}>Administração</option>
              <option value={2}>Agronegócio</option>
              <option value={3}>Agronomia</option>
            </Select>

            <h3>Formação</h3>
            <Select name="formation" placeholder="Selecione">
              <option value={1}>Cursando</option>
              <option value={2}>Graduado</option>
              <option value={3}>Pós-graduado</option>
              <option value={4}>Mestrado</option>
              <option value={5}>Doutorado</option>
            </Select>
            <Input name="cpf" label="CPF" placeholder="000.000.000-00" />
            <Input
              label="Forma de Pagamento"
              placeholder="Insira o seu pix ou dados de pagamento"
            />
          </S.InputContainer>
          <S.ContainerDoBang>
            <Checkbox defaultChecked>Aceitar Termos de Uso</Checkbox>
          </S.ContainerDoBang>
          <S.ContainerDoBang>
            <Checkbox defaultChecked>Aceitar Políticas de Privacidade</Checkbox>
          </S.ContainerDoBang>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Confirmar e-mail
          </ButtonKnewave>
        </S.ContainerInformation>
      </MultiStepForm>
    </S.Wrapper>
  );
}
