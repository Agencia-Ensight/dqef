import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Input } from "../../components/Input";
import Router from "next/router";
import { MultiStepForm } from "../../components/MultiStepForm";
import InputMask from "react-input-mask";

import { useRouter } from "next/router";
import { useState } from "react";

export default function signinredatorstep1() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit() {
    if (password === confirmPassword) {
      Router.push("/signinredatorstep2");
    } else console.log("23232");
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => router.back}>Voltar</a>
        <h1>Preencha os Campos</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <MultiStepForm
          firstStep={true}
          stateName="signupData"
          onSubmit={() => handleSubmit()}
          onFail={() => {
            Router.push("/signinredatorstep1");
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua senha "
              required
            />
            <Input
              type="password"
              label="Confirme sua senha "
              placeholder="Repita ela"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <Input
              label="Telefone para contato"
              name="phone"
              placeholder="41 99555-6667"
              type="number"
              required
            /> */}
            {/* TODO */}
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
