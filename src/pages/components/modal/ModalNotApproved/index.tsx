import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";

export function ModalNotApproved() {

  return (
    <>
      
    
    <S.NerdImage>
    <img src="/images/notapproved.png" alt="" />

    </S.NerdImage>

    <S.TextInformation> 
      <div>
    <p>Texto de por que não foi aprovado
    </p>
    </div>
    </S.TextInformation>
    
    <S.ButtonFinaleira>
    <ButtonKnewave size="lg" variant="SECONDARY">Cancelar</ButtonKnewave>
    <ButtonKnewave size="lg" variant="PRIMARY">Enviar Novamente</ButtonKnewave>
    </S.ButtonFinaleira>
    

      
      
    </>
  );
}
