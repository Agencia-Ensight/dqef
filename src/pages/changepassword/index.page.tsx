import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../components/Input";

export default function changepassword() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">
          <span>Voltar</span>
        </a>
        <h1>Alterar Senha.</h1>
        <p>Insira a nova senha</p>
        <form action="">
          <Input label="Nova Senha" placeholder="Insira ela" required />
          <Input
            label="Confirme a nova senha"
            placeholder="Insira ela"
            required
          />
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Confirmar
          </ButtonKnewave>
        </form>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
