import { ButtonKnewave } from "@/components";
import { useModal } from "@/contexts";
import { useMedia } from "@/hooks";
import * as S from "./styles";

export function ModalNeedsMoreTime() {
  const isMobile = useMedia("(max-width: 600px)");
  const { close } = useModal();

  return (
    <>
      <S.ButtonBang>
        <p>Estou com dificuldade, preciso de mais tempo!</p>
      </S.ButtonBang>
      <S.NerdImage>
        <S.Image src="/images/nerdzinalright.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <h3>
          Legal! Vamos adicionar mais <span>3 horas</span> para a entrega do
          trabalho
        </h3>
      </S.TextInformation>

      <S.ButtonFinaleira>
        {isMobile ? (
          <>
            <a
              href="https://api.whatsapp.com/send?phone=554199959588"
              target={"_blank"}
            >
              <ButtonKnewave size="sm" variant="PRIMARY">
                Não é suficiente?
              </ButtonKnewave>
            </a>
          </>
        ) : (
          <>
            <ButtonKnewave size="lg" variant="SECONDARY" onClick={close}>
              Fechar
            </ButtonKnewave>
            <a
              href="https://api.whatsapp.com/send?phone=554199959588"
              target={"_blank"}
            >
              <ButtonKnewave size="lg" variant="PRIMARY">
                Não é suficiente?
              </ButtonKnewave>
            </a>
          </>
        )}
      </S.ButtonFinaleira>
    </>
  );
}
