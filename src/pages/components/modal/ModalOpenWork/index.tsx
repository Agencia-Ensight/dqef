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

export function ModalOpenWork() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.TextInformation>
        <p>Para ver o seu trabalho basta baixar o item desejado</p>
        <p>
          Você tem direito de solicitar alteração até o dia XXX às YYY horas
        </p>
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
          Confirmar Entrega
        </ButtonKnewave>
        <a href="https://wa.me/message/V5ETOHOBOW2HD1">
          <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
            Relatar Problema
          </ButtonKnewave>{" "}
        </a>
      </S.ButtonFinaleira>
    </>
  );
}
