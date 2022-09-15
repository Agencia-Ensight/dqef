import { useModal } from "@/contexts";
import { useJobRequestTime } from "@/hooks";
import { format } from "date-fns";

import { ButtonAlert } from "./components/ButtonAlert";
import { ModalNeedsMoreTime } from "./components/ModalNeedsMoreTime";
import * as S from "./styles";
import { IModalCharge } from "./typings";

export function ModalCharge({ dateOfDelivery, jobId }: IModalCharge) {
  const { open, close } = useModal();
  const formattedDate = format(dateOfDelivery, "dd/MM 'às' HH");
  const { requestMoreTime, isLoading } = useJobRequestTime(jobId);

  function handleSuccess() {
    close();
  }

  async function handleWarnig() {
    await requestMoreTime();
    close();
    open("Mais tempo!", { content: () => <ModalNeedsMoreTime /> });
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
        <ButtonAlert
          onClick={() => handleWarnig()}
          variant="WARNING"
          disabled={isLoading}
          loading={isLoading}
        >
          Estou com dificuldade, preciso de mais tempo!
        </ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
        <a
          href={`https://api.whatsapp.com/send?phone=554199959588&text=${encodeURI(
            `Olá!. ID do meu trabalho: ${jobId}`
          )}`}
          target={"_blank"}
        >
          <ButtonAlert variant="ERROR">Não vou conseguir realizar!</ButtonAlert>
        </a>
      </S.ButtonDiv>
    </>
  );
}
