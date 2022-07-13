import React, { useState } from "react";
import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import useMedia from "../../../../src/hooks/useMedia";
import * as S from "./styles";

export function ModalSentProposal() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.FirstDiv>
        <p>
          Agora é só aguardar a decisão do redator. Caso ele te escolha para
          realizar, o pagamento será solicitado. Assim que for confirmado, você
          será notificado para iniciar!
        </p>
      </S.FirstDiv>

      <S.NerdImage>
        <img src="/images/approved.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <div>
          <p>
            Lembrando que após o pagamento do estudante, você terá 6hrs para
            acessar o seu <span>painel de controle</span>e confirmar o inicio da
            atividade.
          </p>
        </div>
        <div>
          <p>
            Você pode acompanhar todo o processo pelo{" "}
            <span>painel de controle.</span>{" "}
          </p>
        </div>
      </S.TextInformation>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Beleza
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
