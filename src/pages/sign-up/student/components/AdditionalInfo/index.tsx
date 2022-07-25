import { useRouter } from "next/router";
import { Checkbox, Select } from "@chakra-ui/react";

import { ButtonKnewave, ComboboxComp, InputCheckbox } from "@/components";

import * as S from "./styles";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

function AdditionalInfo() {
  const router = useRouter();

  return (
    <>
      <a onClick={() => router.back()}>Voltar</a>
      <h1>Informações Extras</h1>
      <p>Insira alguns dados para completar o seu cadastro.</p>
      <form>
        <S.InputContainer>
          <ComboboxComp
            label="Cursos"
            list={fruits}
            onSelectedChange={(item) => alert(`Alert ${item.name}`)}
          />
          <ComboboxComp
            label="Faculdade"
            list={fruits}
            onSelectedChange={(item) => alert(`Alert ${item.name}`)}
          />
        </S.InputContainer>
        <S.CheckboxContainer>
          <S.InputCheckboxContainer>
            <InputCheckbox name="termsOfUse" id="termsOfUse" required />
            <label htmlFor="termsOfUse">
              Aceitar <a href="#">Termos de Uso</a>
            </label>
          </S.InputCheckboxContainer>
          <S.InputCheckboxContainer>
            <InputCheckbox name="termsOfPrivacy" id="termsOfPrivacy" required />
            <label htmlFor="termsOfPrivacy">
              Aceitar <a href="#">Termos de Privacidade</a>
            </label>
          </S.InputCheckboxContainer>
        </S.CheckboxContainer>

        <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
          Confirmar E-mail
        </ButtonKnewave>
      </form>
    </>
  );
}

export { AdditionalInfo };
