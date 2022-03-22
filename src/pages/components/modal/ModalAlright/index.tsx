import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";

export function ModalAlright() {

  return (
    <>
      <S.ButtonBang> 
      <p>Estou com dificuldade, preciso de mais tempo!</p>

      </S.ButtonBang>
    <S.NerdImage>
    <img src="/images/nerdzinalright.png" alt="" />

    </S.NerdImage>

    <S.TextInformation> 
    <h3>
    Legal! Vamos adicionar mais <span>3 horas </span>para a entrega do trabalho
    </h3>

    </S.TextInformation>
    
    <S.ButtonFinaleira>
    <ButtonKnewave size="lg" variant="SECONDARY">Fechar</ButtonKnewave>
    <ButtonKnewave size="lg" variant="PRIMARY">Não é suficiente?</ButtonKnewave>
    </S.ButtonFinaleira>
    

      
      
    </>
  );
}
