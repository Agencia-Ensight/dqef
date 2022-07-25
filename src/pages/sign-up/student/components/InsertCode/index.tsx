import { ButtonKnewave, Input } from "@/components";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import * as S from "./styles";

function InsertCode() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <a onClick={() => router.back()}>Voltar</a>
      <h1>Inserir Código</h1>
      <Input
        placeholder="Insira seu código"
        label="Insira o código que você recebeu no e-mail"
      />
      <S.ResendCodeContainer>
        <AiOutlineReload color="var(--blue)" />
        <h2>Enviar Código Novamente</h2>
      </S.ResendCodeContainer>
      <div>
        <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
          Criar Conta
        </ButtonKnewave>
      </div>
    </S.Wrapper>
  );
}

export { InsertCode };
