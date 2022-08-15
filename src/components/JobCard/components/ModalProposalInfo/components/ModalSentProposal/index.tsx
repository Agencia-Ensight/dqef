import Link from "next/link";

import { ButtonKnewave } from "@/components";
import { useModal } from "@/contexts";
import { useMedia } from "@/hooks";
import * as S from "./styles";

export function ModalSentProposal() {
  const { close } = useModal();
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.FirstDiv>
        <p>
          Agora é só aguardar a decisão do redator. Caso ele te escolha para
          realizar, o pagamento será solicitado. Assim que for confirmado, você
          será notificado para iniciar!
        </p>
      </S.FirstDiv>

      <S.NerdImage>
        <img src="/images/approved.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <div>
          <p>
            Lembrando que após o pagamento do estudante, você terá 6hrs para
            acessar o seu{" "}
            <Link href="/perfil" passHref>
              <span>painel de controle</span>
            </Link>
            e confirmar o inicio da atividade.
          </p>
        </div>
        <div>
          <p>
            Você pode acompanhar todo o processo pelo{" "}
            <Link href="/perfil" passHref>
              <span>painel de controle.</span>
            </Link>{" "}
          </p>
        </div>
      </S.TextInformation>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={close}
        >
          Beleza
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
