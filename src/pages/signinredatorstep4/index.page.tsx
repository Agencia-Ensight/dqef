import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { AiOutlineReload } from "react-icons/ai";
import { Input } from "../../components/Input";
import {
  ISignUpData,
  IValidateCodeData,
  signUp,
  validateCode,
} from "../../services/auth";
import React, { useMemo } from "react";
import Router from "next/router";
import { getSignupStep4 } from "../../shared/signup";

import { useRouter } from "next/router";

export default function signinredatorstep4() {
  const [emailCode, setEmailCode] = React.useState("");

  const router = useRouter();

  const { handleSubmit, resendCode } = useMemo(
    () => getSignupStep4(2, "/signinredatorstep5", emailCode, "signupData"),
    [emailCode]
  );

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>

      <form onSubmit={handleSubmit}>
        <S.ContainerInformation>
          <a onClick={() => router.back()}>Voltar</a>
          <h1>Inserir Código</h1>
          <p>Insira o código que você recebeu no e-mail.</p>
          <div>
            <Input
              placeholder="- - - - - -"
              maxLength={6}
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>

          <S.ContainerInformationDosBang onClick={resendCode}>
            <AiOutlineReload color="var(--blue)" />
            <h2>Enviar Código Novamente</h2>
          </S.ContainerInformationDosBang>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Criar Conta
          </ButtonKnewave>
        </S.ContainerInformation>
      </form>
    </S.Wrapper>
  );
}
