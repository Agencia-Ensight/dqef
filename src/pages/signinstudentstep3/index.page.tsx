import Router from "next/router";
import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Input } from "../../components/Input";
import { MultiStepForm } from "../../components/MultiStepForm";
import { getSignupStep3 } from "../../shared/signup";
import * as S from "./styles";

export default function signinstudentstep3() {
  const {
    handleSubmit
  } = getSignupStep3(1, '/signinstudentstep4');

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">Voltar</a>
        <h1>Confirme o seu e-mail</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <MultiStepForm
          stateName="signupStudentData"
          onSubmit={handleSubmit}
          onFail={() => {
            Router.push("/signinstudentstep1");
          }}
        >
          <S.InputContainer>
            <Input placeholder="Insira seu email" />
          </S.InputContainer>
          <ButtonKnewave variant="PRIMARY" size="sm">
            Enviar Código
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
