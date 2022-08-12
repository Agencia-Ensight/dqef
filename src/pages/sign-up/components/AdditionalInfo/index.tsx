import { useMemo, useState } from "react";

import {
  ButtonKnewave,
  MultiSelect,
  InputCheckbox,
  ComboboxComp,
  IRenderProps,
} from "@/components";
import { useToast, useUser } from "@/contexts";
import * as S from "./styles";
import { useQuery } from "@apollo/client";
import {
  CollegeProps,
  FormationProps,
  GET_COLLEGES,
  GET_FORMATIONS,
  GET_KNOWLEDGES,
  KnowledgeProps,
} from "@/services/queries";

type IAdditionalInfo = {
  type: "EDITOR" | "STUDENT";
} & IRenderProps;

export function AdditionalInfo({
  onComplete,
  prevRes,
  type,
  onPrevStep,
}: IAdditionalInfo) {
  const [formation, setFormation] = useState(1);
  const [college, setCollege] = useState(1);
  const [knowledges, setKnowledges] = useState<number[]>([]);
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const colleges = useQuery<{ colleges: CollegeProps[] }>(GET_COLLEGES);
  const allKnowledges =
    useQuery<{ knowledges: KnowledgeProps[] }>(GET_KNOWLEDGES);
  const formations = useQuery<{ formations: FormationProps[] }>(GET_FORMATIONS);
  const knowledgesToOptions = useMemo(
    () =>
      allKnowledges?.data?.knowledges?.map((knowledge) => ({
        id: knowledge.id,
        label: knowledge.name,
      })) || [],
    [allKnowledges?.data?.knowledges]
  );
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
      if (type === "EDITOR") {
        await signUp({
          type,
          email: prevRes.email,
          name: prevRes.name,
          password: prevRes.password,
          formationId: formation,
          collegeId: college,
          knowledgeIds: knowledges,
          cpf: prevRes.cpf,
          phone: prevRes.phone,
        });
      } else {
        await signUp({
          type,
          email: prevRes.email,
          name: prevRes.name,
          password: prevRes.password,
          collegeId: college,
          courseId: prevRes.courseId,
          phone: prevRes.phone,
        });
      }

      onComplete({ ...prevRes, formation, college, knowledges });
      addToast({ type: "success", msg: "Cadastro realizado com sucesso!" });
    } catch (err: any) {
      if (err.response.data === "email already exists") {
        addToast({
          type: "error",
          msg: "Este e-mail já está cadastrado",
        });
        return;
      }

      addToast({
        type: "error",
        msg: "Algum problema com seu cadastro, tente novamente mais tarde",
      });
    }
  }

  return (
    <form>
      <a onClick={onPrevStep}>Voltar</a>
      <h1>Informações Extras</h1>
      <p>Insira alguns dados para completar o seu cadastro.</p>

      <S.InputContainer>
        <ComboboxComp
          label="Faculdade"
          items={colleges?.data?.colleges || []}
          onSelectedChange={(item) => setCollege(item.id)}
          name="college"
        />

        <S.Label>Áreas de conhecimento</S.Label>
        <MultiSelect
          options={knowledgesToOptions}
          id="knowledges"
          name="knowledges"
          onChange={(e) => setKnowledges((knowledges) => [...knowledges, e.id])}
        />

        <ComboboxComp
          items={formations?.data?.formations || []}
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
