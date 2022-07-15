import Router from "next/router";

import { ButtonKnewave, Input, MultiStepForm } from "@/components";

import * as S from "./styles";

function ChangePassword() {
  function handleSubmit() {
    Router.push("/sign-in");
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>
      <MultiStepForm
        stateName="forgotPasswordData"
        onSubmit={handleSubmit}
        onFail={() => Router.push("/forgot-password")}
      >
        <S.ContainerInformation>
          <a onClick={() => Router.back()}>
            <span>Voltar</span>
          </a>
          <h1>Alterar Senha</h1>
          <p>Insira a nova senha</p>
          <Input
            label="Nova Senha"
            placeholder="Insira ela"
            required
            type="password"
          />
          <Input
            label="Confirme a nova senha"
            name="password"
            placeholder="Insira ela"
            type="password"
            required
          />
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Confirmar
          </ButtonKnewave>
        </S.ContainerInformation>
      </MultiStepForm>
    </S.Wrapper>
  );
}

export default ChangePassword;
