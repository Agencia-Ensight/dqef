import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { AiOutlineReload } from "react-icons/ai";
import { Input } from "../../components/Input";
import { ISignUpData, IValidateCodeData, signUp, validateCode } from "../../services/auth";
import React from "react";
import Router from "next/router";


export default function signinredatorstep4() {
  const [emailCode, setEmailCode] = React.useState("");

  const getSignupData = () => {
    const existingData = sessionStorage.getItem('signupData');
    if (existingData) {
      return JSON.parse(existingData);
    }
    return null;
  };

  const resendCode = async () => {
    const data = getSignupData();
    if (data) {
      const payload: ISignUpData = {
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
        cpf: data.cpf,
        type: 2,
        formation: parseInt(data.formation),
        course: parseInt(data.course),
        college: parseInt(data.college),
      };
      return await signUp(payload);

    }
  }

  const validateEmailCode = async () => {
    const data = getSignupData();
    if (data) {
      const payload: IValidateCodeData = {
        email: data.email,
        code: emailCode,
        password: data.password,
      }
      return await validateCode(payload);
    }
  }

  function handleError(error: any) {
    // TODO: implement error handling
    console.error(error);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validateEmailCode();
      Router.push("/signinredatorstep5");
    } catch (error) {
      handleError(error);
    }
  }


  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>

      <form onSubmit={handleSubmit}>
        <S.ContainerInformation>
          <a href="#">Voltar</a>
          <h1>Inserir Código</h1>
          <p>Insira o código que você recebeu no e-mail.</p>
          <div>
            <Input label="E-mail" placeholder="Insira o seu e-mail" value={emailCode} onChange={(e) => setEmailCode(e.target.value)} />
          </div>

          <S.ContainerInformationDosBang onClick={resendCode}>
            <AiOutlineReload color="var(--blue)" />
            <h2>Enviar Código Novamente</h2>
          </S.ContainerInformationDosBang>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">Criar Conta</ButtonKnewave>
        </S.ContainerInformation>
      </form>



    </S.Wrapper>
  )
}