import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Input } from "../../components/Input";
import Router from "next/router";
import { MultiStepForm } from "../../components/MultiStepForm";
import { signUp, ISignUpData } from "../../services/auth";
import { getSignupStep3 } from "../../shared/signup";


export default function signinredatorstep3() {
  const {
    handleSubmit
  } = getSignupStep3(2, '/signinredatorstep4');

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>
      <MultiStepForm
        stateName="signupData"
        onSubmit={handleSubmit}
        onFail={() => {
          Router.push("/signinredatorstep1");
        }}
      >
        <S.ContainerInformation>
          <a href="#">Voltar</a>
          <h1>Confirme o seu e-mail</h1>
          <p>Vamos enviar um e-mail para você, para confirmar a sua identidade.</p>
          <Input name="email" label="E-mail" placeholder="Insira o seu e-mail" />
          <div>
            <ButtonKnewave variant="PRIMARY" size="sm" type="submit">Enviar Código</ButtonKnewave>
          </div>
        </S.ContainerInformation>
      </MultiStepForm>
    </S.Wrapper>
  )
}
