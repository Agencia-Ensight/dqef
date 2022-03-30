import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../components/Input";

export default function forgotpassword() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">
          <span>Voltar</span>
        </a>
        <h1>Insira o seu e-mail</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <form>
          <Input
            placeholder="teste@gmail.com"
            label="Esqueci minha senha"
            required
          />
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Enviar Código
          </ButtonKnewave>
        </form>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
