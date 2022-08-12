import { IoCopy } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";

import { useMedia } from "@/hooks";
import { ButtonKnewave } from "@/components";
import { useModal, useToast } from "@/contexts";

import * as S from "./styles";
import { IModalPayment } from "./typings";

export function ModalPayment({ price }: IModalPayment) {
  const { close } = useModal();
  const { addToast } = useToast();

  const isMobile = useMedia("(max-width: 600px)");

  async function handleCopy(info: string) {
    await navigator.clipboard.writeText(info);
    alert("Copiado");
  }

  const CNPJ = "46.021.642/0001-78";

  const picPay = "deixaqueeufaco";

  return (
    <>
      <S.Description1>
        <p>
          Escaneie o QRCODE abaixo com o app do seu banco e anexe o comprovante.
          Assim que o pagamento for confirmado, o redator iniciará a execução da
          atividade.
        </p>
      </S.Description1>
      <S.Descriptionsplit>
        <S.Image src="/images/qrcode.png" />
        <S.Description>
          <S.ContainerPadrao>
            <h4>Copie a chave CNPJ:</h4>
            <S.ButtonCopy onClick={() => handleCopy(CNPJ)}>
              <IoCopy size={20} color="#42A4EF" />
              <h3>{CNPJ}</h3>
            </S.ButtonCopy>
          </S.ContainerPadrao>
          <S.ContainerPadrao3>
            <h4>ou</h4>
          </S.ContainerPadrao3>
          <S.ContainerPadrao>
            <h4>Mande para o nosso picpay:</h4>
            <S.ButtonCopy onClick={() => handleCopy(picPay)}>
              <IoCopy size={20} color="#42A4EF" />
              <h3>{picPay}</h3>
            </S.ButtonCopy>
          </S.ContainerPadrao>
          <hr />
          <S.ContainerPadrao2>
            <h4>Valor à pagar</h4>
            <h5>{price}</h5>
          </S.ContainerPadrao2>
        </S.Description>
      </S.Descriptionsplit>
      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <p>Anexe o comprovante de pagamento</p>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="SECONDARY"
          onClick={close}
        >
          Cancelar
        </ButtonKnewave>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Continuar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
