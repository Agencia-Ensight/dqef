import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import { IoCopy } from "react-icons/io5";
import React, { useCallback, useRef, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import * as S from "./styles";
import useMedia from "../../../../src/hooks/useMedia";

export function ModalPayment() {
  const isMobile = useMedia("(max-width:600px)");

  const handlecopy = useCallback(async () => {
    await navigator.clipboard.writeText("46.021.642/0001-78");
    alert("CNPJ copiado");
  }, []);
  const handlecopy2 = useCallback(async () => {
    await navigator.clipboard.writeText("deixaqueeufaco");
    alert("Picpay copiado");
  }, []);

  function COPY() {
    navigator.clipboard.writeText("deixaqueeufaco");
    alert("copiado");
  }

  return (
    <>
      <S.Description1>
        <p>
          Escaneie o QRCODE abaixo com o app do seu banco e anexe o comprovante.
          Assim que o pagamento for confirmado, o redator iniciará a execução da
          atividade.
        </p>
      </S.Description1>
      <S.Descriptionsplit>
        <S.Image src="/images/qrcode.png" />
        <S.Description>
          <S.ContainerPadrao>
            <h4>Copie a chave CNPJ:</h4>
            <S.ButtonCopy onClick={handlecopy}>
              <IoCopy size={20} color="#42A4EF" />
              <h3>46.021.642/0001-78</h3>
            </S.ButtonCopy>
          </S.ContainerPadrao>
          <S.ContainerPadrao3>
            <h4>ou</h4>
          </S.ContainerPadrao3>
          <S.ContainerPadrao>
            <h4>Mande para o nosso picpay:</h4>
            <S.ButtonCopy onClick={handlecopy2}>
              <IoCopy size={20} color="#42A4EF" />
              <h3>deixaqueeufaco</h3>
            </S.ButtonCopy>
          </S.ContainerPadrao>
          <hr />
          <S.ContainerPadrao2>
            <h4>Valor à pagar</h4>
            <h5>R$</h5>
          </S.ContainerPadrao2>
        </S.Description>
      </S.Descriptionsplit>
      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <p>Anexe o comprovante de pagamento</p>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="SECONDARY">
          Cancelar
        </ButtonKnewave>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Continuar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
