import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";

export function ModalRating() {

  return (
    <>


     

       <S.TextInformation>
         <p>Visando o controle de qualidade de nossos redatores, gostaríamos de saber como foi seu desempenho na atividade 328, realizada conosco!! A nota foi positiva?</p> 
         </S.TextInformation> 

        <S.InputText>

        </S.InputText>


         <S.Description>

        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} />
      
       
       </S.Description> 

       <S.ButtonFinaleira>

       <ButtonKnewave size="lg" variant="PRIMARY">Enviar</ButtonKnewave>
    
       </S.ButtonFinaleira>
    
    
    
    

      
      
    </>
  );
}
