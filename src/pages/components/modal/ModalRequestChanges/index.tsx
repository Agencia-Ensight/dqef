import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";

export function ModalRequestChanges() {

  return (
    <>


     

       <S.TextInformation>
         <p>Escreva o que você quer de alteração e/ou anexe um arquivo</p> 
         </S.TextInformation> 

        <S.InputText>

        </S.InputText>


         <S.ButtonBang>
         <AiOutlineDownload color="#42A4EF" />
          <h2>Anexar arquivo</h2>

         </S.ButtonBang>

       <S.ButtonFinaleira>

       <ButtonKnewave size="lg" variant="PRIMARY">Enviar</ButtonKnewave>
    
       </S.ButtonFinaleira>
    
    
    
    

      
      
    </>
  );
}
