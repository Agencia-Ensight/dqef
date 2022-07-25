import { FormEvent, useState } from "react";
import Router from "next/router";

import { ButtonKnewave, Input } from "@/components";

import * as S from "./styles";
import { useToast, useUser } from "@/contexts";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { addToast } = useToast();
  const { resetPassword } = useUser();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      addToast({ type: "error", msg: "Senhas não conferem" });
      return;
    }

    try {
      await resetPassword({ code, email, newPassword: password });
      Router.replace("/");
      addToast({ type: "success", msg: "Senha redefinida com sucesso" });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Não foi possível redefinir a senha, suas credenciais são inválidas",
      });
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => Router.back()}>
          <span>Voltar</span>
        </a>
        <h1>Alterar Senha</h1>
        <form onSubmit={handleSubmit}>
          <p>Insira seu e-mail</p>
          <Input
            label="Insira seu email"
            name="email"
            placeholder="Insira aqui..."
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Insira a código de recuperação</p>
          <Input
            label="Insira o código de recuperação"
            name="code"
            placeholder="Insira aqui..."
            type="number"
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <p>Insira a nova senha</p>
          <Input
            label="Nova Senha"
            placeholder="Insira ela"
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Input
            label="Confirme a nova senha"
            name="password"
            placeholder="Insira ela"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
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

export default ChangePassword;
