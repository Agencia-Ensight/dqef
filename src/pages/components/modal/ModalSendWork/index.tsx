import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import useMedia from "../../../../hooks/useMedia";

export function ModalSendWork() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.NerdImage>
        <img src="/images/sendwork.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <h3>Limite Aceitável do Trabalho</h3>
        <h2>25%</h2>
      </S.TextInformation>
      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <p>Baixar Relatório de Plágio</p>
      </S.ButtonBang>

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
