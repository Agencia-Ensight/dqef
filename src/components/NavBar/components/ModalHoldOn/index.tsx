import Link from "next/link";

import { ButtonKnewave } from "@/components";
import { useMedia } from "@/hooks";
import * as S from "./styles";
import { useModal } from "@/contexts";

function ModalHoldOn() {
  const { close } = useModal();
  const isMobile = useMedia("(max-width: 600px)");

  return (
    <>
      <S.Description>
        Antes de publicar um trabalho, você tem que criar ou entrar na sua conta
        da Deixa Que Eu Faço!
      </S.Description>
      <S.Image src="/images/deal-done.png" />
      <S.Description>
        Clique no botão abaixo para continuar e Mãos à obra!
      </S.Description>
      <S.ButtonContainer>
        <Link href="/sign-in" passHref>
          <ButtonKnewave
            variant="PRIMARY"
            size={isMobile ? "sm" : "lg"}
            onClick={close}
          >
            Vamos lá!
          </ButtonKnewave>
        </Link>
      </S.ButtonContainer>
    </>
  );
}

export { ModalHoldOn };
