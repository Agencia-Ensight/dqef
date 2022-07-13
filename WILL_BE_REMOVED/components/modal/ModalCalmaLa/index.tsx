import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import useMedia from "../../../../src/hooks/useMedia";

import * as S from "./styles";

export function ModalCalmaLa() {
  const isMobile = useMedia("(max-width: 600px)");
  return (
    <>
      <S.Description>
        Antes de publicar um trabalho, você tem que criar ou entrar na sua conta
        da Deixa Que Eu Faço!
      </S.Description>
      <S.Image src="/images/deal-done.png" />
      <S.Description>
        Clique no botão abaixo para continuar e Mãos à obra!
      </S.Description>
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size={isMobile ? "sm" : "lg"}>
          Vamos lá!
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
