import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Input } from "../../components/Input";

export default function signinstudentstep1() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">Voltar</a>
        <h1>Preencha os Campos</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <S.InputContainer>
          <Input
            label="Nome completo"
            placeholder="Insira o seu nome"
            type="text"
            required
          />
          <Input label="Email" placeholder="teste@gmail.com" required />
          <Input
            label="Crie sua senha"
            placeholder="Insira sua senha "
            required
          />
          <Input
            label="Confirme sua senha "
            placeholder="Repita ela"
            required
          />
          <Input
            label="Telefone para contato"
            placeholder="41 99555-6667"
            type="number"
            required
          />
        </S.InputContainer>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Próximo
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
