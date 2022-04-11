import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { AiOutlineReload } from "react-icons/ai";
import { Input } from "../../components/Input";
import { ISignUpData, signUp } from "../../services/auth";
import React from "react";


export default function signinredatorstep4() {
  const [emailCode, setEmailCode] = React.useState("");

  const resendCode = async () => {
    const existingData = sessionStorage.getItem('signupData');
    if (existingData) {

      const data = JSON.parse(existingData);
      // Prepare data
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


  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>

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
        <ButtonKnewave variant="PRIMARY" size="sm" >Criar Conta</ButtonKnewave>
      </S.ContainerInformation>



    </S.Wrapper>
  )
}
