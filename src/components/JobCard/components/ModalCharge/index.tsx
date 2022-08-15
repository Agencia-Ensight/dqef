import { useModal } from "@/contexts";
import { format } from "date-fns";

import { ButtonAlert } from "./components/ButtonAlert";
import { ModalNeedsMoreTime } from "./components/ModalNeedsMoreTime";
import * as S from "./styles";
import { IModalCharge } from "./typings";

export function ModalCharge({ dateOfDelivery }: IModalCharge) {
  const { open, close } = useModal();
  const formattedDate = format(dateOfDelivery, "dd/MM 'às' HH");

  function handleNeedsMoreTime() {
    open("", { content: () => <ModalNeedsMoreTime /> });
  }

  return (
    <>
      <S.Description>
        Como está o andamento do trabalho? Selecione as opções abaixo! Lembrando
        que o prazo final para entrega é dia {formattedDate}.
      </S.Description>
      <S.ButtonDiv>
        <ButtonAlert variant="SUCCESS" onClick={close}>
          Tudo certo! Entregarei dentro do prazo!
        </ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
        <ButtonAlert onClick={() => handleNeedsMoreTime()} variant="WARNING">
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
