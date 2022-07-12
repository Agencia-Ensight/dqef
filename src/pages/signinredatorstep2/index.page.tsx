import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, Select as SelectReact } from "@chakra-ui/react";
import { Input } from "../../components/Input";
import Router from "next/router";
import { MultiStepForm } from "../../components/MultiStepForm";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";
import { MultiSelect } from "../../components/MultiSelect";
import { getSignupStep3 } from "../../shared/signup";
import { getCourses, ICourse } from "../../services/course";
import {
  getFormations,
  getKnowledges,
  IFormation,
  IKnowledge,
} from "../../services/common";
import { getColleges, ICollege } from "../../services/college";
import { useState } from "react";

const options = [
  { name: "Swedish", value: "sv" },
  { name: "English", value: "en" },
  {
    type: "group",
    name: "Group name",
    items: [{ name: "Spanish", value: "es" }],
  },
];

export default function signinredatorstep2() {
  const { handleSubmit } = getSignupStep3(2, "/signinredatorstep4");

  const [courses, setCourses] = React.useState<ICourse[]>([]);
  const [formations, setFormations] = React.useState<IFormation[]>([]);
  const [knowledges, setKnowledges] = React.useState<IKnowledge[]>([]);
  const [colleges, setColleges] = useState<ICollege[]>([]);
  const [cpf, setCpf] = useState("");

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

    async function loadColleges() {
      const res = await getColleges();
      setColleges(res);
    }

    loadCourses();
    loadFormations();
    loadKnowledges();
    loadColleges();
  }, []);

  function validCPF(strCPF: string) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  var strCPF = "08146817947";

  function banana() {
    if (validCPF(strCPF) === true) {
      return console.log("banana");
    } else console.log("arroz");
  }

  banana();

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>
      <S.ContainerInformation>
        <MultiStepForm
          stateName="signupData"
          onSubmit={handleSubmit}
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
            {/* <SelectReact name="college" placeholder="Selecione da nossa lista">
              {knowledges.map((knowledge: IKnowledge) => (
                <option key={knowledge.id} value={knowledge.id}>
                  {knowledge.name}
                </option>
              ))}
            </SelectReact> */}
            <MultiSelect
              options={knowledges}
              id="knowledges"
              name="knowledges"
            />
            <h3>Formação</h3>
            <SelectReact name="formation" placeholder="Selecione">
              {formations.map((formation: IFormation) => (
                <option key={formation.id} value={formation.id}>
                  {formation.name}
                </option>
              ))}
            </SelectReact>
            <h3>Faculdade</h3>
            <SelectReact name="college" placeholder="Selecione">
              {colleges.map((college: ICollege) => (
                <option key={college.id} value={college.id}>
                  {college.name} - {college.sigla}
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
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
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
