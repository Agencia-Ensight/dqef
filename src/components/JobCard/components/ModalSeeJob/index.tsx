import { AiOutlineDownload } from "react-icons/ai";
import { format } from "date-fns";

import { useMedia } from "@/hooks";
import { ButtonKnewave } from "@/components";

import * as S from "./styles";
import { IModalOpenWork } from "./typings";
import { useModal } from "@/contexts";
import { ModalRequestChanges } from "../ModalRequestChanges";

export function ModalSeeJob({
  jobId,
  dateOfChanges,
  isFirstDelivery,
}: IModalOpenWork) {
  const isMobile = useMedia("(max-width:600px)");
  const { open } = useModal();

  const formattedDate = dateOfChanges
    ? format(dateOfChanges, "dd/MM 'às' HH")
    : "";

  function handleRequestChanges() {
    open("Solicitar Alteração", {
      content: () => <ModalRequestChanges jobId={jobId} />,
    });
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

      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <h2>Baixar Trabalho</h2>
      </S.ButtonBang>
      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <h2>Baixar Arquivo de Plágio</h2>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Confirmar Entrega
        </ButtonKnewave>
        {isFirstDelivery && (
          <ButtonKnewave
            size={isMobile ? "sm" : "lg"}
            variant="SECONDARY"
            onClick={() => handleRequestChanges()}
          >
            Alteração
          </ButtonKnewave>
        )}
        <a href="https://wa.me/message/V5ETOHOBOW2HD1">
          <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="SECONDARY">
            Relatar Problema
          </ButtonKnewave>
        </a>
      </S.ButtonFinaleira>
    </>
  );
}
