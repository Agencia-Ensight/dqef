import { ButtonKnewave, Input, MultiStepForm } from "@/components";
import { useRouter } from "next/router";
import React from "react";

import * as S from "./styles";

function Info() {
  const router = useRouter();

  return (
    <>
      <a onClick={() => router.back()}>Voltar</a>
      <h1>Preencha os Campos</h1>
      <p>Vamos enviar um e-mail para você, para confirmar a sua identidade.</p>
      <form>
        <S.InputContainer>
          <Input
            label="Nome completo"
            name="name"
            placeholder="Insira o seu nome"
            type="text"
            required
          />
          <Input
            label="Email"
            name="email"
            placeholder="teste@gmail.com"
            required
          />
          <Input
            label="Crie sua senha"
            name="password"
            placeholder="Insira sua senha"
            required
            type="password"
          />
          <Input
            label="Confirme sua senha"
            name="password"
            placeholder="Repita ela"
            required
            type="password"
          />

          <Input
            label="Telefone para contato"
            name="phone"
            placeholder="99 99999-9999"
            required
          />
        </S.InputContainer>
        <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
          Próximo
        </ButtonKnewave>
      </form>
    </>
  );
}

export { Info };
