import { AiOutlineDownload } from "react-icons/ai";

import { useMedia } from "@/hooks";
import { ButtonKnewave } from "@/components";

import * as S from "./styles";

export function ModalRequestChanges() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.TextInformation>
        <p>Escreva o que você quer de alteração e/ou anexe um arquivo</p>
      </S.TextInformation>

      <S.InputText></S.InputText>

      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <h2>Anexar arquivo</h2>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Enviar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
