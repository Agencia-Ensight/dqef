import { useState } from "react";

import { ButtonKnewave, Input, IRenderProps } from "@/components";
import { useToast, useUser } from "@/contexts";
import * as S from "./styles";

function InsertCode({ prevRes, onComplete }: IRenderProps) {
  const [code, setCode] = useState("");
  const { signUpConfirm } = useUser();
  const { addToast } = useToast();

  async function handleSubmit() {
    try {
      await signUpConfirm({
        code,
        email: prevRes.email,
        password: prevRes.password,
      });
      onComplete({ ...prevRes, code });
      addToast({ type: "success", msg: "E-mail confirmado com sucesso" });
    } catch (error) {
      addToast({
        type: "error",
        msg: "Erro ao confirmar e-mail, seu código está inválido",
      });
    }
  }

  return (
    <S.Wrapper>
      <a onClick={() => {}}>Voltar</a>
      <h1>Inserir Código</h1>
      <Input
        placeholder="Insira seu código"
        label="Insira o código que você recebeu no e-mail"
        onChange={(e) => setCode(e.target.value)}
      />
      {/* <S.ResendCodeContainer>
        <AiOutlineReload color="var(--blue)" />
        <h2>Enviar Código Novamente</h2>
      </S.ResendCodeContainer> */}
      <div>
        <ButtonKnewave variant="PRIMARY" size="sm" onClick={handleSubmit}>
          Criar Conta
        </ButtonKnewave>
      </div>
    </S.Wrapper>
  );
}

export { InsertCode };
