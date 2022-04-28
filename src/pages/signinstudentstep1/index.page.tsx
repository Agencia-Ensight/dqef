import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Input } from "../../components/Input";

import { MultiStepForm } from "../../components/MultiStepForm";
import Router from "next/router";

export default function signinstudentstep1() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">Voltar</a>
        <h1>Preencha os Campos</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <MultiStepForm
          firstStep={true}
          stateName="signupStudentData"
          onSubmit={(_) => {
            Router.push("/signinstudentstep2");
          }}
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
            <Input label="Email" name="email" placeholder="teste@gmail.com" required />
            <Input
              label="Crie sua senha"
              name="password"
              placeholder="Insira sua senha "
              required
            />
            <Input
              label="Confirme sua senha "
              name="password"
              placeholder="Repita ela"
              required
            />
            <Input
              label="Telefone para contato"
              name="phone"
              placeholder="41 99555-6667"
              type="number"
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
