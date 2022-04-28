import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../components/Input";
import { useState } from "react";
import Router from "next/router";
import { forgotPassword } from "../../services/auth";
import { MultiStepForm } from "../../components/MultiStepForm";

export default function forgotpassword() {
  const handleSubmit = (data: any) => {
    const { email } = data;
    forgotPassword(email).then(() => {
      Router.push("/insertcode");
    }).catch(() => {
      alert("Erro ao enviar o código de recuperação");
    });
  };
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>
      <MultiStepForm
        firstStep={true}
        stateName="forgotPasswordData"
        onSubmit={handleSubmit}
        onFail={() => {
          Router.push("/forgotpassword");
        }}
      >
        <S.ContainerInformation>
          <a href="#">
            <span>Voltar</span>
          </a>
          <h1>Insira o seu e-mail</h1>
          <p>
            Vamos enviar um e-mail para você, para confirmar a sua identidade.
          </p>
          <Input
            placeholder="teste@gmail.com"
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
