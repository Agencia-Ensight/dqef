import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";
import { Input } from "../../components/Input";
import { MultiStepForm } from "../../components/MultiStepForm";
import Router from "next/router";
import { forgotPassword } from "../../../WILL_BE_REMOVED/auth";

export default function forgotpassword() {
  const getSignupData = () => {
    const existingData = sessionStorage.getItem("forgotPasswordData");
    if (existingData) {
      return JSON.parse(existingData);
    }
    return null;
  };

  const resendCode = () => {
    const { email } = getSignupData();
    forgotPassword(email)
      .then(() => {
        console.log("Código enviado com sucesso");
      })
      .catch(() => {
        alert("Erro ao enviar o código de recuperação");
      });
  };

  const handleSubmit = (data: any) => {
    Router.push("/changepassword");
  };

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>

      <MultiStepForm
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
          <h1>Insira o código</h1>
          <p>
            Vamos enviar um e-mail para você, para confirmar a sua identidade.
          </p>
          <div>
            <Input
              label="Insira o código"
              required
              name="code"
              type="text"
              placeholder="- - - - - -"
              maxLength={6}
            />
            <S.IconContainer onClick={resendCode}>
              <AiOutlineReload color="var(--blue)" />
              <h2>Enviar Código Novamente</h2>
            </S.IconContainer>
            <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
              Alterar senha
            </ButtonKnewave>
          </div>
        </S.ContainerInformation>
      </MultiStepForm>
    </S.Wrapper>
  );
}
