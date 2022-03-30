import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../components/Input";

export default function login() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/login.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <p>
          {" "}
          <span> Fazer Login</span>
        </p>
        <h1>Bem-vindo de Volta</h1>
        <form>
          <S.InputContainer>
            <Input label="E-mail" placeholder="teste@gmail.com" required />
            <Input label="Senha" placeholder="Senha" required />
          </S.InputContainer>
          <S.IconContainer>
            <RiLockPasswordFill size={20} color="var(--blue)" />
            <a href="/forgotpassword">
              Esqueci minha <span>senha</span>
            </a>
          </S.IconContainer>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Entrar
          </ButtonKnewave>
        </form>

        <hr />
        <h2>
          Não tenho Conta,
          <a href="#">
            <span>criar a conta</span>
          </a>
        </h2>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
