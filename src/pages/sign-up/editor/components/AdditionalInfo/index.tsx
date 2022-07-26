import {
  ButtonKnewave,
  MultiSelect,
  InputCheckbox,
  ComboboxComp,
} from "@/components";
import { useToast, useUser } from "@/contexts";
import { useState } from "react";
import { useEditor } from "../../EditorContext";

import * as S from "./styles";

const formations = [
  { id: 3, name: "Pessego" },
  { id: 4, name: "Limao" },
];

const knowledgesData = [
  { id: 3, label: "HTML" },
  { id: 4, label: "CSS" },
  { id: 5, label: "JavaScript" },
  { id: 6, label: "TypeScript" },
  { id: 7, label: "React" },
  { id: 8, label: "NodeJS" },
];

const colleges = [
  { id: 3, name: "Pontifícia Universidade Católica" },
  { id: 4, name: "Faculdade Federal do Paraná" },
];

const knowledgesNumber = knowledgesData.map((knowledge) => knowledge.id);

export function AdditionalInfo() {
  const [formation, setFormation] = useState(formations[0].id);
  const [college, setCollege] = useState(colleges[0].id);
  const [knowledges, setKnowledges] = useState(knowledgesNumber);
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const { updateStep, data, updateData } = useEditor();
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
      updateData({ college, formation, knowledges, termsOfUse, privacyPolicy });
      await signUp({
        type: "EDITOR",
        email: data.email,
        name: data.name,
        password: data.password,
        formationId: formation,
        collegeId: college,
        knowledgeIds: knowledges,
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
    <form>
      <a onClick={() => updateStep("info")}>Voltar</a>
      <h1>Informações Extras</h1>
      <p>Insira alguns dados para completar o seu cadastro.</p>

      <S.InputContainer>
        <ComboboxComp
          label="Faculdade"
          items={colleges}
          onSelectedChange={(item) => setCollege(item.id)}
          name="college"
        />

        <S.Label>Áreas de conhecimento</S.Label>
        <MultiSelect
          options={knowledgesData}
          id="knowledges"
          name="knowledges"
          onChange={(e) => setKnowledges((data) => [...data, e.id])}
        />

        <ComboboxComp
          items={formations}
          onSelectedChange={(e) => setFormation(e.id)}
          label="Formação"
        />

        {/* <Input
          label="Forma de Pagamento"
          placeholder="Insira o seu pix ou dados de pagamento"
        /> */}
      </S.InputContainer>
      <S.CheckboxContainer>
        <S.InputCheckboxContainer>
          <InputCheckbox
            name="termsOfUse"
            id="termsOfUse"
            onChange={(e) => setTermsOfUse(e.target.checked)}
          />
          <label htmlFor="termsOfUse">
            Aceitar <a href="#">Termos de Uso</a>
          </label>
        </S.InputCheckboxContainer>
        <S.InputCheckboxContainer>
          <InputCheckbox
            name="termsOfPrivacy"
            id="termsOfPrivacy"
            onChange={(e) => setPrivacyPolicy(e.target.checked)}
          />
          <label htmlFor="termsOfPrivacy">
            Aceitar <a href="#">Termos de Privacidade</a>
          </label>
        </S.InputCheckboxContainer>
      </S.CheckboxContainer>

      <ButtonKnewave variant="PRIMARY" size="sm" onClick={onSubmit}>
        Confirmar e-mail
      </ButtonKnewave>
    </form>
  );
}
