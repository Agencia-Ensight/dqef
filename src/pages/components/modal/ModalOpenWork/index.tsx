import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";

export function ModalOpenWork() {

  return (
    <>


     

       <S.TextInformation>
         <p>Para ver o seu trabalho basta baixar o item desejado</p> 
         </S.TextInformation> 

        


         <S.ButtonBang>
         <AiOutlineDownload color="#42A4EF" />
          <h2>Baixar Trabalho</h2>

         </S.ButtonBang>
         <S.ButtonBang>
         <AiOutlineDownload color="#42A4EF" />
          <h2>Baixar Arquivo de Plágio</h2>

         </S.ButtonBang>

      
    
    
    
    

      
      
    </>
  );
}
