import React, { useState } from "react";
import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";

export function ModalVerifying() {
  return (
    <>
      <S.NerdImage>
        <img src="/images/sendwork.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <h3>Limite Aceitável do Trabalho</h3>
        <h2>50%</h2>
      </S.TextInformation>
    </>
  );
}
