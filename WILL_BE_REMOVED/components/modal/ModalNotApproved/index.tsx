import React, { useState } from "react";
import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import useMedia from "../../../../src/hooks/useMedia";
import * as S from "./styles";

export function ModalNotApproved() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.NerdImage>
        <img src="/images/notapproved.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <div>
          <p>Texto de por que não foi aprovado</p>
        </div>
      </S.TextInformation>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="SECONDARY">
          Cancelar
        </ButtonKnewave>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Enviar Novamente
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
