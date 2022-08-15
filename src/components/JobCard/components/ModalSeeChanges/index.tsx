import { format } from "date-fns";
import { AiOutlineDownload } from "react-icons/ai";

import { ButtonKnewave } from "@/components";
import { useMedia } from "@/hooks";

import * as S from "./styles";
import { IModalSeeChanges } from "./typings";
import { useModal } from "@/contexts";

export function ModalSeeChanges({
  obs,
  dateOfTheFinalAdjust,
}: IModalSeeChanges) {
  const { close } = useModal();
  const isMobile = useMedia("(max-width:600px)");

  const formattedDate = format(dateOfTheFinalAdjust, "dd/MM 'às' HH'h'");

  return (
    <>
      <S.ContainerTitle>
        <h4>
          A entrega deverá ser realizada até o dia {formattedDate}!
          <br />
          Após os ajustes, seu pagamento será realizado!
        </h4>
      </S.ContainerTitle>
      <S.Description>{obs}</S.Description>

      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <p>Baixar Arquivos</p>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={close}
        >
          Começar
        </ButtonKnewave>
      </S.ButtonFinaleira>

      <S.ContainerLastDescription>
        <h3>
          Problema com a solicitação? <br />
          Converse com o{" "}
          <a href="/inside-job">
            <span>estudante</span>
          </a>{" "}
          ou com a nossa{" "}
          <a target="_blank" href="https://wa.me/message/V5ETOHOBOW2HD1">
            <span>equipe</span>
          </a>{" "}
          .
        </h3>
      </S.ContainerLastDescription>
    </>
  );
}
