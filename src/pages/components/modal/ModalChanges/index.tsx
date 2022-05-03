import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";


export function ModalChanges() {

  return (
    <>

      <S.ContainerTitle>
        <h4>A entrega deverá ser realizada até o dia XX às XXh!<br />Após os ajustes, seu pagamento será realizado!</h4>
        </S.ContainerTitle>    
     <S.Description>

       
       </S.Description> 


    
       <S.ButtonBang> 
      <AiOutlineDownload color="#42A4EF" />
      <p>Baixar Arquivos</p>

    </S.ButtonBang>
    

    <S.ButtonFinaleira>
    <ButtonKnewave size="lg" variant="PRIMARY">Começar</ButtonKnewave>
    </S.ButtonFinaleira>
    
    <S.ContainerLastDescription>
    
    <h3>Problema com a solicitação? <br />
Converse com o  <a href="#"><span>estudante</span></a>  ou com a nossa <a target="_blank" href="https://wa.me/message/V5ETOHOBOW2HD1"><span>equipe</span></a> .</h3>

    </S.ContainerLastDescription>
    

      
      
    </>
  );
}
