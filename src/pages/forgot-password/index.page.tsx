import { useState } from "react";
import Router from "next/router";

import * as S from "./styles";
import { ButtonKnewave, Input } from "@/components";
import { useUser, useToast } from "@/contexts";

export default function forgotpassword() {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useUser();
  const { addToast } = useToast();

  async function handleSubmit() {
    try {
      await forgotPassword(email);
      Router.replace("/reset-password");
      addToast({
        type: "success",
        msg: "Verifique seu e-mail para redefinir sua senha, não esqueça de verificar o spam",
      });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Não conseguimos enviar o e-mail no momento, tente mais tarde",
      });
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>
      <S.ContainerInformation>
        <a>
          <span>Voltar</span>
        </a>
        <h1>Insira o seu e-mail</h1>
        <p>
          Vamos enviar um código por e-mail para você confirmar a sua
          identidade.
        </p>
        <Input
          placeholder="email@provedor.com"
          label="Esqueci minha senha"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <ButtonKnewave variant="PRIMARY" size="sm" onClick={handleSubmit}>
          Enviar Código
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
