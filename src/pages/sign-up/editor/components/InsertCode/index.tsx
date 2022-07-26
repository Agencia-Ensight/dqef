import { useState } from "react";

import { ButtonKnewave, Input } from "@/components";
import { useEditor } from "../../EditorContext";
import { useToast, useUser } from "@/contexts";
import * as S from "./styles";

function InsertCode() {
  const [code, setCode] = useState("");
  const { updateStep, data } = useEditor();
  const { signUpConfirm } = useUser();
  const { addToast } = useToast();

  async function handleSubmit() {
    try {
      await signUpConfirm({
        code,
        email: data.email,
        password: data.password,
      });
      updateStep("success");
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
      <a onClick={() => updateStep("aditional-info")}>Voltar</a>
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
