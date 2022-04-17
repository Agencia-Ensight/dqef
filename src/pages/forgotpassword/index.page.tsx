import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../components/Input";
import { useState } from "react";
import Router from "next/router";
import { forgotPassword } from "../../services/auth";

export default function forgotpassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgotPassword(email).then(() => {
      // Router.push("/changepassword");
      alert("Enviamos um e-mail para você, para alterar sua senha.");
    }).catch(() => {
      alert("Erro ao enviar o código de recuperação");
    });
  };
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
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="teste@gmail.com"
            label="Esqueci minha senha"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Enviar Código
          </ButtonKnewave>
        </form>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
