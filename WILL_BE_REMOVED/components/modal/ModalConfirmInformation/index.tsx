import React, { useState } from "react";
import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import useMedia from "../../../../src/hooks/useMedia";
import * as S from "./styles";

export function ModalConfirmInformation() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.FirstDiv>
        <p>Antes de enviar a proposta, confirme os dados</p>
      </S.FirstDiv>

      <S.TextInformation>
        <h2>Confirmar Preço</h2>
        <p>Esse vai ser o preço recebido após a finalização do Trabalho</p>

        <h1>R$150,00</h1>
      </S.TextInformation>

      <S.TextInformation>
        <h2>Data de Entrega</h2>
        <p>Essa é a data limite de entrega do serviço (sem contar a revisão)</p>

        <h1>03/10/22</h1>
      </S.TextInformation>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Enviar Proposta
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}