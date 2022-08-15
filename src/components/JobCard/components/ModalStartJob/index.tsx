import { format } from "date-fns";

import { ButtonKnewave } from "@/components";
import { useMedia } from "@/hooks";

import * as S from "./styles";
import { IModalStartJob } from "./typings";
import { useModal } from "@/contexts";
import { ModalInfoDelivery } from "../ModalInfoDelivery";

export function ModalStartJob({
  dateOfDelivery,
  dateFirstCharge,
  dateSecondCharge,
  dateThirdCharge,
}: IModalStartJob) {
  const isMobile = useMedia("(max-width:600px)");
  const { open } = useModal();

  const formattedDate = format(dateOfDelivery, "dd/MM 'às' HH");

  function handleSendReview() {
    open("Informações da Entrega", {
      content: () => (
        <ModalInfoDelivery
          dateFirstCharge={dateFirstCharge}
          dateSecondCharge={dateSecondCharge}
          dateThirdCharge={dateThirdCharge}
        />
      ),
    });
  }

  return (
    <>
      <S.Description>
        O estudante realizou o pagamento! A entrega deverá ser realizada até o
        dia {formattedDate}
      </S.Description>
      <S.Image src="/images/deal-done.png" />
      <S.Description>
        Clique no botão abaixo para continuar e Mãos à obra!
      </S.Description>
      <S.ButtonContainer>
        <ButtonKnewave
          variant="PRIMARY"
          size={isMobile ? "sm" : "lg"}
          onClick={() => handleSendReview()}
        >
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
