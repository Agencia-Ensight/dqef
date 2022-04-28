import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { AiOutlineReload } from "react-icons/ai";
import { Input } from "../../components/Input";
import { getSignupStep4 } from "../../shared/signup";
import { useMemo, useState } from "react";

export default function signinstudentstep4() {
  const [emailCode, setEmailCode] = useState("");

  const {
    handleSubmit,
    resendCode
  } = useMemo(() => getSignupStep4(1, '/signinstudentstep5', emailCode, 'signupStudentData'), [emailCode]);

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <form onSubmit={handleSubmit}>
        <S.ContainerInformation>
          <a href="#">Voltar</a>
          <h1>Inserir Código</h1>
          <p>Insira o código que você recebeu no e-mail.</p>
          <Input placeholder="Insira seu código" onChange={(e) => setEmailCode(e.target.value)} value={emailCode} />
          <div onClick={resendCode}>
            <AiOutlineReload color="var(--blue)" />
            <h2>Enviar Código Novamente</h2>
          </div>
          <ButtonKnewave variant="PRIMARY" size="sm">
            Criar Conta
          </ButtonKnewave>
        </S.ContainerInformation>
      </form>
    </S.Wrapper>
  );
}
