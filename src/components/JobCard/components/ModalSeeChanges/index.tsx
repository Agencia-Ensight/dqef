import { format } from "date-fns";
import { AiOutlineDownload } from "react-icons/ai";

import { ButtonKnewave } from "@/components";
import { useMedia } from "@/hooks";

import * as S from "./styles";
import { IModalSeeChanges } from "./typings";
import { useModal } from "@/contexts";

export function ModalSeeChanges({
  obs,
  medias,
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
      <br />
      <ul>
        {medias.map((media) => (
          <li key={media.id}>
            <a href={media.link} target="_blank" rel="noopener noreferrer">
              {media.title}
            </a>
          </li>
        ))}
      </ul>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={close}
        >
          Entendido
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
