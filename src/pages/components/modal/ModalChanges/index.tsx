import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";


export function ModalChanges() {

  return (
    <>
     <S.Description>

       
       </S.Description> 


    
       <S.ButtonBang> 
      <AiOutlineDownload color="#42A4EF" />
      <p>Baixar Arquivos</p>

    </S.ButtonBang>
    

    <S.ButtonFinaleira>
    <ButtonKnewave size="lg" variant="PRIMARY">Começar</ButtonKnewave>
    </S.ButtonFinaleira>
    
    
    
    

      
      
    </>
  );
}
