import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";

export function ModalApproved() {

  return (
    <>
      
    
    <S.NerdImage>
    <img src="/images/approved.png" alt="" />

    </S.NerdImage>

    <S.TextInformation> 
      <div>
    <p>Como lhe foi informado anteriormente, o estudante tem o direito de solicitar alterações até o dia XX às XXh, caso ele julgue necessário.
    </p>
    </div>
    <div>
    <p>Se, ao fim desse prazo, o estudante não solicitar, seu pagamento será realizado até às 23:59 horas do dia limite. Caso ele solicite, você será notificado e receberá as instruções via Chat. </p>
    </div>
    <div>
    <p>No mais, agradecemos seu desempenho e dedicação, é uma honra ter você como parceiro!</p>
    </div>
    </S.TextInformation>
    
    <S.ButtonFinaleira>
    
    <ButtonKnewave size="lg" variant="PRIMARY">Confirmar</ButtonKnewave>
    </S.ButtonFinaleira>
    

      
      
    </>
  );
}
