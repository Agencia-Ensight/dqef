import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";

export function ModalConfirmInformation() {

  return (
    <>
      
    <S.FirstDiv>

    <p>Antes de enviar a proposta, confirme os dados 
    </p>
    </S.FirstDiv>

    

    <S.TextInformation> 
    
    <h2>Confirmar Preço

    </h2>
    <p>Esse vai ser o preço recebido após a finalização do Trabalho</p>

    <h1>
    R$150,00

    </h1>

    
    </S.TextInformation>

    <S.TextInformation> 
    
    <h2>Data de Entrega

    </h2>
    <p>Essa é a data limite de entrega do serviço (sem contar a revisão)</p>

    <h1>
    03/10/22

    </h1>

    
    </S.TextInformation>
    
    <S.ButtonFinaleira>
    
    <ButtonKnewave size="lg" variant="PRIMARY">Enviar Proposta</ButtonKnewave>
    </S.ButtonFinaleira>
    

      
      
    </>
  );
}
