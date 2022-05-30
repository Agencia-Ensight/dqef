import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../components/Input";
import { MultiStepForm } from "../../components/MultiStepForm";
import Router, { useRouter } from "next/router";
import { forgotPasswordCode } from "../../services/auth";

export default function changepassword() {
  const handleSubmit = (data: any) => {
    const { password, email, code } = data;
    forgotPasswordCode(email, code, password)
      .then(() => {
        console.log("Senha alterada com sucesso");
        Router.push("/");
      })
      .catch(() => {
        alert("Erro ao enviar o código de recuperação");
      });
  };

  const router = useRouter();

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
          <a onClick={() => router.back()}>
            <span>Voltar</span>
          </a>
          <h1>Alterar Senha</h1>
          <p>Insira a nova senha</p>
          <Input
            label="Nova Senha"
            placeholder="Insira ela"
            required
            type="password"
          />
          <Input
            label="Confirme a nova senha"
            name="password"
            placeholder="Insira ela"
            type="password"
            required
          />
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Confirmar
          </ButtonKnewave>
        </S.ContainerInformation>
      </MultiStepForm>
    </S.Wrapper>
  );
}
