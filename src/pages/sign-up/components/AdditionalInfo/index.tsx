import { useState } from "react";

import {
  ButtonKnewave,
  MultiSelect,
  InputCheckbox,
  ComboboxComp,
  IRenderProps,
  Input,
} from "@/components";
import { useToast, useUser } from "@/contexts";
import * as S from "./styles";
import { useColleges, useCourses, useFormations, useKnowledges } from "@/hooks";

type IAdditionalInfo = {
  type: "EDITOR" | "STUDENT";
} & IRenderProps;

export function AdditionalInfo({
  onComplete,
  prevRes,
  type,
  onPrevStep,
}: IAdditionalInfo) {
  const [payment, setPaymnet] = useState("");
  const [course, setCourse] = useState(1);
  const [formation, setFormation] = useState(1);
  const [college, setCollege] = useState(1);
  const [knowledges, setKnowledges] = useState<number[]>([]);
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const knowledgesList = useKnowledges();
  const courses = useCourses();
  const formations = useFormations();
  const colleges = useColleges();

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
          courseId: course,
          cpf: prevRes.cpf,
          phone: prevRes.phone,
          payment,
        });
      } else {
        await signUp({
          type,
          email: prevRes.email,
          name: prevRes.name,
          password: prevRes.password,
          collegeId: college,
          courseId: course,
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
          items={colleges.data || []}
          onSelectedChange={(item) => setCollege(item.id)}
          name="college"
        />

        <S.Label>Curso</S.Label>
        <MultiSelect
          options={
            courses.data?.map((know) => ({
              id: know.id,
              label: know.name,
            })) || []
          }
          id="course"
          name="course"
          onChange={(e) => setCourse(e.id)}
        />

        {type === "EDITOR" && (
          <>
            <S.Label>Áreas de conhecimento</S.Label>
            <MultiSelect
              options={
                knowledgesList.data?.map((know) => ({
                  id: know.id,
                  label: know.name,
                })) || []
              }
              id="knowledges"
              name="knowledges"
              onChange={(e) =>
                setKnowledges((knowledges) => [...knowledges, e.id])
              }
            />

            {/* <Input
              label="Forma de Pagamento"
              placeholder="Insira o seu pix ou dados de pagamento"
              value={payment}
              onChange={(e) => setPaymnet(e.target.value)}
            /> */}
            <ComboboxComp
              items={formations?.data || []}
              onSelectedChange={(e) => setFormation(e.id)}
              label="Formação"
            />
          </>
        )}
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
