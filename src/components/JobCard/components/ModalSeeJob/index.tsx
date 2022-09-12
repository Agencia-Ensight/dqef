import { format } from "date-fns";

import { useJobDelivery, useMedia } from "@/hooks";
import { ButtonKnewave } from "@/components";

import * as S from "./styles";
import { IModalOpenWork } from "./typings";
import { useModal, useToast } from "@/contexts";
import { ModalRequestChanges } from "../ModalRequestChanges";

export function ModalSeeJob({
  jobId,
  dateOfChanges,
  obs,
  isFirstDelivery,
  medias,
}: IModalOpenWork) {
  const isMobile = useMedia("(max-width:600px)");
  const { open, close } = useModal();
  const { delivery } = useJobDelivery();
  const { addToast } = useToast();

  const formattedDate = dateOfChanges
    ? format(dateOfChanges, "dd/MM 'às' HH")
    : "";

  function handleRequestChanges() {
    open("Solicitar Alteração", {
      content: () => <ModalRequestChanges jobId={jobId} />,
    });
  }

  async function handleConfirmDelivery() {
    try {
      await delivery(jobId, "FINAL_DELIVERY");
      close();
      addToast({ msg: "Trabalho entregue com sucesso", type: "success" });
    } catch (error) {
      addToast({ msg: "Erro ao confirmar entrega", type: "error" });
    }
  }

  return (
    <>
      <S.TextInformation>
        <p>Para ver o seu trabalho basta baixar o item desejado</p>
        {isFirstDelivery && (
          <p>
            Você tem direito de solicitar alteração até o dia {formattedDate}
            horas
          </p>
        )}
      </S.TextInformation>

      <ul>
        {medias.map((media) => (
          <li key={media.id}>
            <a target="_blank" rel="noopener noreferrer" href={media.link}>
              {media.title}
            </a>
          </li>
        ))}
      </ul>

      <p>{obs}</p>
      {/* <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <h2>Baixar Trabalho</h2>
      </S.ButtonBang> */}
      {/* <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <h2>Baixar Arquivo de Plágio</h2>
      </S.ButtonBang> */}

      <S.ButtonFinaleira>
        {isFirstDelivery && (
          <ButtonKnewave
            size={isMobile ? "sm" : "lg"}
            variant="PRIMARY"
            onClick={() => handleConfirmDelivery()}
          >
            Confirmar Entrega
          </ButtonKnewave>
        )}

        <a target="_blank" href="https://wa.me/message/V5ETOHOBOW2HD1">
          <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="SECONDARY">
            Relatar Problema
          </ButtonKnewave>
        </a>
      </S.ButtonFinaleira>
    </>
  );
}
