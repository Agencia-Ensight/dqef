import { useState } from "react";
import Router from "next/router";
import { Checkbox } from "@chakra-ui/react";
import { RiLockPasswordFill } from "react-icons/ri";

import { ButtonKnewave, Input } from "@/components";
import { useUser } from "@/contexts";

import * as S from "./styles";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useUser();

  async function handleSubmit() {
    await signIn({ email, password });
    Router.push("/");
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/loginfixed.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <p>
          <span>Fazer Login</span>
        </p>
        <h1>Bem-vindo de Volta</h1>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <Input
              label="E-mail"
              placeholder="email@provedor.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Senha"
              placeholder="Senha"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputContainer>
          <Checkbox>
            <h5>Manter-me conectado</h5>
          </Checkbox>

          <S.IconContainer>
            <RiLockPasswordFill size={20} color="var(--blue)" />
            <a href="/forgot-password">
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
          <a href="/sign-up">
            <span>Criar a conta</span>
          </a>
        </h2>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export default SignIn;
