import {
  ButtonKnewave,
  MultiSelect,
  InputCheckbox,
  Input,
  ComboboxComp,
} from "@/components";
import { useRouter } from "next/router";

import * as S from "./styles";

const fruits = [
  { id: 1, name: "Pessego" },
  { id: 2, name: "Limao" },
];

export function AdditionalInfo() {
  const router = useRouter();
  return (
    <form>
      <a onClick={() => router.back()}>Voltar</a>
      <h1>Informações Extras</h1>
      <p>Insira alguns dados para completar o seu cadastro.</p>

      <S.InputContainer>
        <ComboboxComp list={fruits} onSelectedChange={() => {}} label="Curso" />
        <S.Label>Áreas de conhecimento</S.Label>
        <MultiSelect options={fruits} id="knowledges" name="knowledges" />

        <ComboboxComp
          list={fruits}
          onSelectedChange={() => {}}
          label="Formação"
        />

        <Input
          name="cpf"
          label="CPF"
          required
          type="number"
          placeholder="000.000.000-00"
        />
        <Input
          label="Forma de Pagamento"
          placeholder="Insira o seu pix ou dados de pagamento"
          required
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
        Confirmar e-mail
      </ButtonKnewave>
    </form>
  );
}
