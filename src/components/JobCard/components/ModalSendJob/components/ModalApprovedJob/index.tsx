import { format } from "date-fns";

import { ButtonKnewave } from "@/components";
import { useModal } from "@/contexts";
import { useMedia } from "@/hooks";
import * as S from "./styles";
import { IModalApprovedJob } from "./typings";

export function ModalApprovedJob({
  dateLimitOfRequestChanges,
}: IModalApprovedJob) {
  const isMobile = useMedia("(max-width: 600px)");
  const { close } = useModal();

  const formattedDate = format(dateLimitOfRequestChanges, "dd/MM 'às' HH'h'");

  return (
    <>
      <S.NerdImage>
        <img src="/images/approved.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <div>
          <p>
            Como lhe foi informado anteriormente, o estudante tem o direito de
            solicitar alterações até o dia {formattedDate}, caso ele julgue
            necessário.
          </p>
        </div>
        <div>
          <p>
            Se, ao fim desse prazo, o estudante não solicitar, seu pagamento
            será realizado até às 23:59 horas do dia limite. Caso ele solicite,
            você será notificado e receberá as instruções via Chat.{" "}
          </p>
        </div>
        <div>
          <p>
            No mais, agradecemos seu desempenho e dedicação, é uma honra ter
            você como parceiro!
          </p>
        </div>
      </S.TextInformation>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={close}
        >
          Confirmar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
