import React, { useMemo, useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import { Input } from "../../../../components/Input";
import useMedia from "../../../../hooks/useMedia";

import * as S from "./styles";

const formatBrl = new Intl.NumberFormat("pt-BR");

export function ModalCounterProposal() {
  const isMobile = useMedia("(max-width:600px)");
  const [value, setValue] = useState("");

  function currencyMask(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = formatBrl.format(
      Number(e.target.value.replace(/[\D]+/g, ""))
    );

    return e;
  }

  function handleCurrency(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
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
        <ButtonKnewave variant="PRIMARY" size={isMobile ? "sm" : "lg"}>
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
