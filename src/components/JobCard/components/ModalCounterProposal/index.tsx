import { useState } from "react";

import { ButtonKnewave, Input } from "@/components";
import { useMedia, useSendProposal } from "@/hooks";

import * as S from "./styles";
import { useModal, useToast } from "@/contexts";

const formatBrl = new Intl.NumberFormat("pt-BR");

type IModalCounterProposal = {
  jobId: string;
  userId: string;
};

export function ModalCounterProposal({ jobId, userId }: IModalCounterProposal) {
  const isMobile = useMedia("(max-width:600px)");
  const [value, setValue] = useState("");
  const { sendProposal } = useSendProposal();
  const { addToast } = useToast();
  const { close } = useModal();

  function currencyMask(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = formatBrl.format(
      Number(e.target.value.replace(/[\D]+/g, ""))
    );
    return e;
  }

  function handleCurrency(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  async function handleSendProposal() {
    try {
      await sendProposal({
        jobId,
        userId,
        status: "send",
        price: Number(value.replace(/[\D]+/g, "")),
      });
      addToast({
        type: "success",
        msg: "Proposta enviada!",
      });
      close();
    } catch {
      addToast({ type: "error", msg: "Erro ao enviar proposta!" });
    }
  }

  return (
    <S.Wrapper>
      <S.Description>Insira o valor da contraproposta</S.Description>
      <S.Image src="/images/deal-done.png" />

      <Input
        placeholder="Insira o valor aqui"
        value={value}
        onChange={(e) => handleCurrency(currencyMask(e))}
      />

      <S.ButtonContainer>
        <ButtonKnewave
          variant="PRIMARY"
          size={isMobile ? "sm" : "lg"}
          onClick={handleSendProposal}
        >
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
