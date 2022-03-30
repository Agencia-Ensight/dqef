import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";
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
        <h1>Insira o código</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <div>
          <form>
            <Input
              label="Insira o código"
              required
              type="text"
              placeholder="- - - -"
            />
            <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
              Enviar Código
            </ButtonKnewave>
          </form>
          <S.IconContainer>
            <AiOutlineReload color="var(--blue)" />
            <h2>Enviar Código Novamente</h2>
          </S.IconContainer>
        </div>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
