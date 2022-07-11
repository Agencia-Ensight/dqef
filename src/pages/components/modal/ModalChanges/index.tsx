import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";
import { AiOutlineDownload } from "react-icons/ai";
import useMedia from "../../../../hooks/useMedia";

export function ModalChanges() {
  const isMobile = useMedia("(max-width:600px)");
  return (
    <>
      <S.ContainerTitle>
        <h4>
          A entrega deverá ser realizada até o dia XX às XXh!
          <br />
          Após os ajustes, seu pagamento será realizado!
        </h4>
      </S.ContainerTitle>
      <S.Description></S.Description>

      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <p>Baixar Arquivos</p>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Começar
        </ButtonKnewave>
      </S.ButtonFinaleira>

      <S.ContainerLastDescription>
        <h3>
          Problema com a solicitação? <br />
          Converse com o{" "}
          <a href="/inside-job">
            <span>estudante</span>
          </a>{" "}
          ou com a nossa{" "}
          <a target="_blank" href="https://wa.me/message/V5ETOHOBOW2HD1">
            <span>equipe</span>
          </a>{" "}
          .
        </h3>
      </S.ContainerLastDescription>
    </>
  );
}
