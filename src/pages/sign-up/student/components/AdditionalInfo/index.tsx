import { useState } from "react";

import { ButtonKnewave, ComboboxComp, InputCheckbox } from "@/components";
import { useStudent } from "../../StudentContext";
import * as S from "./styles";
import { useToast, useUser } from "@/contexts";

const courses = [
  { id: 1, name: "Ciência da Computação" },
  { id: 2, name: "Educação física" },
];

const colleges = [
  { id: 3, name: "Pontifícia Universidade Católica" },
  { id: 4, name: "Faculdade Federal do Paraná" },
];

function AdditionalInfo() {
  const [course, setCourse] = useState(courses[0].id);
  const [college, setCollege] = useState(colleges[0].id);
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const { data, updateData, updateStep } = useStudent();
  const { signUp } = useUser();
  const { addToast } = useToast();

  async function onSubmit() {
    if (!termsOfUse || !privacyPolicy) {
      addToast({
        type: "error",
        msg: "Você deve aceitar os termos de uso e política de privacidade",
      });
      return;
    }

    try {
      updateData({ course, college, termsOfUse, privacyPolicy });
      await signUp({
        type: "STUDENT",
        email: data.email,
        name: data.name,
        password: data.password,
        collegeId: college,
        courseId: course,
        cpf: data.cpf,
        phone: data.phone,
      });
      updateStep("code");
      addToast({ type: "success", msg: "Cadastro realizado com sucesso!" });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Algum problema com seu cadastro, tente novamente mais tarde",
      });
    }
  }

  return (
    <>
      <a onClick={() => updateStep("info")}>Voltar</a>
      <h1>Informações Extras</h1>
      <p>Insira alguns dados para completar o seu cadastro.</p>
      <S.InputContainer>
        <ComboboxComp
          label="Cursos"
          items={courses}
          onSelectedChange={(item) => setCourse(item.id)}
          name="course"
        />
        <ComboboxComp
          label="Faculdade"
          items={colleges}
          onSelectedChange={(item) => setCollege(item.id)}
          name="college"
        />
      </S.InputContainer>
      <S.CheckboxContainer>
        <S.InputCheckboxContainer>
          <InputCheckbox
            id="termsOfUse"
            name="termsOfUse"
            onChange={(e) => setTermsOfUse(e.target.checked)}
          />
          <label htmlFor="termsOfUse">
            Aceitar <a href="#">Termos de Uso</a>
          </label>
        </S.InputCheckboxContainer>
        <S.InputCheckboxContainer>
          <InputCheckbox
            id="termsOfPrivacy"
            name="privacyPolicy"
            onChange={(e) => setPrivacyPolicy(e.target.checked)}
          />
          <label htmlFor="termsOfPrivacy">
            Aceitar <a href="#">Termos de Privacidade</a>
          </label>
        </S.InputCheckboxContainer>
      </S.CheckboxContainer>

      <ButtonKnewave variant="PRIMARY" size="sm" onClick={onSubmit}>
        Confirmar E-mail
      </ButtonKnewave>
    </>
  );
}

export { AdditionalInfo };
