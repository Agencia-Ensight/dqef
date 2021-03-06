import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, Select } from "@chakra-ui/react";
import { Input } from "../../components/Input";
import React, { useEffect } from "react";
import { getCourses, ICourse } from "../../services/auth";
import { MultiStepForm } from "../../components/MultiStepForm";
import Router, { useRouter } from "next/router";
import { getSignupStep3 } from "../../shared/signup";

export default function signinstudentstep2() {
  const [courses, setCourses] = React.useState<ICourse[]>([]);

  const router = useRouter();

  const { handleSubmit } = getSignupStep3(1, "/signinstudentstep4");


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
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => router.back()}>Voltar</a>
        <h1>Informações Extras</h1>
        <p>Insira alguns dados para completar o seu cadastro.</p>
        <MultiStepForm
          stateName="signupStudentData"
          onSubmit={handleSubmit}
          onFail={() => {
            Router.push("/signinstudentstep1");
          }}
        >
          <S.InputContainer>
            <label>Curso</label>


            <Select className="testesolidopadrao" name="course" placeholder="Selecione o curso">
              {courses.map((course: ICourse) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </Select>

            <Input name="college" label="Faculdade" placeholder="Insira aqui" />
          </S.InputContainer>
          <div>
            <Checkbox>Aceitar Termos de Uso</Checkbox>
          </div>
          <Checkbox>Aceitar Políticas de Privacidade</Checkbox>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Confirmar E-mail
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
