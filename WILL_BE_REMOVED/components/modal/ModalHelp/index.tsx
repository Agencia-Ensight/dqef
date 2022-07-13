import { ButtonKnewave } from "../../../../src/components/ButtonKnewave";
import useMedia from "../../../../src/hooks/useMedia";
import * as S from "./styles";

export function ModalHelp() {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.ButtonContainer>
        <S.Button>Cancelar Trabalho</S.Button>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.Button>Preciso de mais tempo</S.Button>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.Button>Tirar uma dúvida com estudante</S.Button>
      </S.ButtonContainer>
      <S.InfoDiv>
        <S.Description>Nenhuma das opções?</S.Description>
        <S.Description>Então converse com nossa equipe</S.Description>
      </S.InfoDiv>
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size={isMobile ? "sm" : "lg"}>
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
