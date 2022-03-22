import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";

export function ModalFeedback() {

  return (
    <>

    <S.NerdImage>
    <img src="/images/deal-done.png" alt="" />

    </S.NerdImage>
     <S.Description>

        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} />
      
       
       </S.Description> 

       <S.TextInformation>
         <p>Trabalho horrível, nunca vi nada pior na minha vida! Eu devia ter trancado a faculdade. Mas fui generoso e dei uma estrela, pois gostei do site.</p> 
         </S.TextInformation> 
    
       
    
    
    
    

      
      
    </>
  );
}
