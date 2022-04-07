import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";


export function ModalInsertWork() {

  return (
    <>
      
    <S.NerdImage>
    <img src="/images/insertwork.png" alt="" />

    </S.NerdImage>

    
    <S.ButtonBang> 
      <AiOutlineDownload color="#42A4EF" />
      <p>Selecione o Arquivo ou arraste</p>

    </S.ButtonBang>
    
    <S.ButtonFinaleira>
    <ButtonKnewave size="lg" variant="SECONDARY">Cancelar</ButtonKnewave>
    <ButtonKnewave size="lg" variant="PRIMARY">Continuar</ButtonKnewave>
    </S.ButtonFinaleira>
    

      
      
    </>
  );
}
