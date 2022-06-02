import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useModal } from "../../../../hooks/useModal";
import { ModalSentProposal } from "../ModalSentProposal";

import * as S from "./styles";

export function ModalCounterProposal() {
  const [value, setValue] = useState("");

  const { isShown, toggle } = useModal();

  function currencyMask(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ",");
    e.target.value = value;

    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <S.Wrapper>
      <S.Description>Insira o valor da contraproposta</S.Description>
      <S.Image src="/images/deal-done.png" />
      <S.InputDiv>
        <Input
          placeholder="Insira o valor aqui"
          value={value}
          onChange={(e) => handleChange(currencyMask(e))}
        />
      </S.InputDiv>
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size="lg" onClick={toggle}>
          Continuar
        </ButtonKnewave>
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText="Proposta Enviada!"
          modalContent={<ModalSentProposal />}
        />
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
