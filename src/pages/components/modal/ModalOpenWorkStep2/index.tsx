import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import useMedia from "../../../../hooks/useMedia";

export function ModalOpenWorkStep2() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.TextInformation>
        <p>Para ver o seu trabalho basta baixar o item desejado</p>
      </S.TextInformation>

      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <h2>Baixar Trabalho</h2>
      </S.ButtonBang>
      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <h2>Baixar Arquivo de Plágio</h2>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="SECONDARY">
          Alteração
        </ButtonKnewave>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Finalizar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
