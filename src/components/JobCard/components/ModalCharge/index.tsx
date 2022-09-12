import { useModal } from "@/contexts";
import { format } from "date-fns";
import { useState } from "react";

import { ButtonAlert } from "./components/ButtonAlert";
import { ModalNeedsMoreTime } from "./components/ModalNeedsMoreTime";
import * as S from "./styles";
import { IModalCharge } from "./typings";

type IDeliveryStatus = "success" | "warning";

export function ModalCharge({ dateOfDelivery }: IModalCharge) {
  const { open, close } = useModal();
  const formattedDate = format(dateOfDelivery, "dd/MM 'às' HH");
  const [deliveryStatus, setDeliveryStatus] = useState<IDeliveryStatus>();

  function handleSuccess() {
    setDeliveryStatus("success");
    close();
  }

  function handleWarnig() {
    setDeliveryStatus("warning");
    open("", { content: () => <ModalNeedsMoreTime /> });
  }

  return (
    <>
      <S.Description>
        Como está o andamento do trabalho? Selecione as opções abaixo! Lembrando
        que o prazo final para entrega é dia {formattedDate}.
      </S.Description>
      <S.ButtonDiv>
        <ButtonAlert variant="SUCCESS" onClick={handleSuccess}>
          Tudo certo! Entregarei dentro do prazo!
        </ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
        <ButtonAlert onClick={() => handleWarnig()} variant="WARNING">
          Estou com dificuldade, preciso de mais tempo!
        </ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
        <a
          href="https://api.whatsapp.com/send?phone=554199959588"
          target={"_blank"}
        >
          <ButtonAlert variant="ERROR">Não vou conseguir realizar!</ButtonAlert>
        </a>
      </S.ButtonDiv>
    </>
  );
}
