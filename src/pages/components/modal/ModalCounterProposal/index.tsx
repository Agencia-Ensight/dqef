import { ButtonKnewave } from "../../../../components/ButtonKnewave";

import * as S from "./styles";

export function ModalCounterProposal() {
  return (
    <>
      <S.Description>
      Insira o valor da contraproposta 
      </S.Description>
      <S.Image src="/images/deal-done.png" />
      
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size="lg">
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
