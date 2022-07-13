import React, { useState } from "react";
import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import useMedia from "../../../../src/hooks/useMedia";
import * as S from "./styles";

export function ModalWontFinish() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.ButtonBang>
        <p>Não vou conseguir realizar!</p>
      </S.ButtonBang>
      <S.NerdImage>
        <img src="/images/sadnerdzin.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <h3>
          Entendi, vamos mandar para o <span>próximo da fila!</span>
        </h3>
      </S.TextInformation>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Fechar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
