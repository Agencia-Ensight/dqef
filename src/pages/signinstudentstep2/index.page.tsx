import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, Select } from "@chakra-ui/react";
import { Input } from "../../components/Input";

export default function signinstudentstep2() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">Voltar</a>
        <h1>Informações Extras</h1>
        <p>Insira alguns dados para completar o seu cadastro.</p>
        <S.InputContainer>
          <label>Curso</label>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Input label="Faculdade" placeholder="Insira aqui" />
        </S.InputContainer>
        <div>
          <Checkbox>Aceitar Termos de Uso</Checkbox>
        </div>
        <Checkbox>Aceitar Políticas de Privacidade</Checkbox>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Confirmar E-mail
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
