import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import { Input } from "../../../../components/Input";
import useMedia from "../../../../hooks/useMedia";

export function ModalInsertWork() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.NerdImage>
        <img src="/images/insertwork.png" alt="" />
      </S.NerdImage>

      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <p>Selecione o Arquivo ou arraste</p>
      </S.ButtonBang>

      <S.ButtonInputSolid>
        <Input placeholder="Observações" className="inputsolido"></Input>
      </S.ButtonInputSolid>
      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="SECONDARY">
          Cancelar
        </ButtonKnewave>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Continuar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
