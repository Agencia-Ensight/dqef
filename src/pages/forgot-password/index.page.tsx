import Router from "next/router";

import * as S from "./styles";
import { ButtonKnewave, Input, MultiStepForm } from "@/components";

export default function forgotpassword() {
  function handleSubmit() {}

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>
      <MultiStepForm
        firstStep={true}
        stateName="forgotPasswordData"
        onSubmit={handleSubmit}
        onFail={() => Router.push("/forgot-password")}
      >
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
          />
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Enviar Código
          </ButtonKnewave>
        </S.ContainerInformation>
      </MultiStepForm>
    </S.Wrapper>
  );
}
