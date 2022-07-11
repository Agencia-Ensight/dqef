import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import useMedia from "../../../../hooks/useMedia";
import * as S from "./styles";

export function ModalAlright() {
  const isMobile = useMedia("(max-width: 600px)");

  return (
    <>
      <S.ButtonBang>
        <p>Estou com dificuldade, preciso de mais tempo!</p>
      </S.ButtonBang>
      <S.NerdImage>
        <S.Image src="/images/nerdzinalright.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <h3>
          Legal! Vamos adicionar mais <span>3 horas </span>para a entrega do
          trabalho
        </h3>
      </S.TextInformation>

      <S.ButtonFinaleira>
        {isMobile ? (
          <ButtonKnewave size="sm" variant="PRIMARY">
            Não é suficiente?
          </ButtonKnewave>
        ) : (
          <>
            <ButtonKnewave size="lg" variant="SECONDARY">
              Fechar
            </ButtonKnewave>
            <ButtonKnewave size="lg" variant="PRIMARY">
              Não é suficiente?
            </ButtonKnewave>
          </>
        )}
      </S.ButtonFinaleira>
    </>
  );
}
