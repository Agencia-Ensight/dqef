import { format } from "date-fns";

import { ButtonKnewave } from "@/components";
import { useMedia } from "@/hooks";

import * as S from "./styles";
import { IModalStartJob } from "./typings";
import { useModal } from "@/contexts";
import { ModalInfoDelivery } from "../ModalInfoDelivery";

export function ModalStartJob({
  jobId,
  dateOfDelivery,
  dateFirstCharge,
  dateSecondCharge,
  dateThirdCharge,
}: IModalStartJob) {
  const isMobile = useMedia("(max-width:600px)");
  const { open, close } = useModal();

  const formattedDate = format(dateOfDelivery, "dd/MM 'às' HH'h'");

  function handleStartJob() {
    close();
    open("Informações da Entrega", {
      content: () => (
        <ModalInfoDelivery
          jobId={jobId}
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
          onClick={() => handleStartJob()}
        >
          Continuar
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
