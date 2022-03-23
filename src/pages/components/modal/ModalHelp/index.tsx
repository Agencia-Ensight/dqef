import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import * as S from "./styles";

export function ModalHelp() {
  return (
    <>
      <S.ButtonContainer>
        <S.Button>Cancelar Trabalho</S.Button>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.Button>Preciso de mais tempo</S.Button>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.Button>Tirar uma dúvida</S.Button>
      </S.ButtonContainer>
      <S.Description>Nenhuma das opções?</S.Description>
      <S.Description>Então converse com nossa equipe</S.Description>
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size="lg">
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
