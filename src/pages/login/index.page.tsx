import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../components/Input";
import { useState } from "react";
import { signIn } from "../../services/auth";
import Router from "next/router";
import { useAuth } from "../../hooks/useAuth";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuth();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(email, password);

    signIn(email, password)
      .then((response) => {
        setToken(response.data.toke.token);
        Router.push("/");
      })
      .catch(() => {
        alert("Erro ao logar");
      });
  };
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/login.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <p>
          <span> Fazer Login</span>
        </p>
        <h1>Bem-vindo de Volta</h1>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <Input
              label="E-mail"
              placeholder="teste@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Senha"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          <a href="/chooseprofile">
            <span>criar a conta</span>
          </a>
        </h2>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
