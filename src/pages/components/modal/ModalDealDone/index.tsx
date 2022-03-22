import { ButtonKnewave } from "../../../../components/ButtonKnewave";

import * as S from "./styles";

export function ModalDealDone() {
  return (
    <>
      <S.Description>
        O estudante realizou o pagamento! A entrega deverá ser realizada até às
        12hrs do dia XX/XX!
      </S.Description>
      <S.Image src="/images/deal-done.png" />
      <S.Description>
        Clique no botão abaixo para continuar e Mãos à obra!
      </S.Description>
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size="lg">
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
