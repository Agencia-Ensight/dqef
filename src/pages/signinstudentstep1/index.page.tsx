import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Input } from "../../components/Input";
import InputMask from "react-input-mask";

import { MultiStepForm } from "../../components/MultiStepForm";
import Router, { useRouter } from "next/router";
import { useState } from "react";

export default function signinstudentstep1() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfimation, setPasswordConfimation] = useState("");

  function handleSubmit() {
    if (password === passwordConfimation) {
      Router.push("/signinstudentstep2");
    } else console.log("123banana");
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => router.back()}>Voltar</a>
        <h1>Preencha os Campos</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <MultiStepForm
          firstStep={true}
          stateName="signupStudentData"
          onSubmit={() => handleSubmit()}
          onFail={() => {
            Router.push("/signinstudentstep1");
          }}
        >
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
            />
            <Input
              label="Confirme sua senha "
              name="password"
              value={passwordConfimation}
              onChange={(e) => setPasswordConfimation(e.target.value)}
              placeholder="Repita ela"
              required
              type="password"
            />

            <h3>Telefone para contato</h3>
            <InputMask
              name="phone"
              mask="99 99999-9999"
              placeholder="99 99999-9999"
              required
            />
          </S.InputContainer>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Próximo
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
