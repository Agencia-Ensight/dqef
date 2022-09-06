import Router from "next/router";
import { IoCopy } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";

import { useMedia, useSendProposal } from "@/hooks";
import { ButtonKnewave, Dropzone } from "@/components";
import { useModal, useToast } from "@/contexts";

import * as S from "./styles";
import { IModalPayment } from "./typings";
import { useAcceptProposal } from "@/hooks/useAcceptProposal";
import { useAddPayment } from "@/hooks/useAddPayment";
import { useState } from "react";
import { uploadFile } from "@/services/api/upload";

export function ModalPayment({
  price,
  proposalId,
  jobId,
  editorId,
}: IModalPayment) {
  const { close } = useModal();
  const { addToast } = useToast();
  const isMobile = useMedia("(max-width: 600px)");
  const { acceptProposal } = useAcceptProposal();
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const { addPayment } = useAddPayment();

  async function handleCopy(info: string) {
    await navigator.clipboard.writeText(info);
    addToast({ msg: "Copiado para a área de transferência", type: "info" });
  }

  async function handleSubmit() {
    setIsLoading(true);
    if (files.length === 0) {
      addToast({ msg: "Anexe o comprovante de pagamento", type: "error" });
      setIsLoading(false);
      return;
    }
    const { id } = await uploadFile({ file: files[0], title: files[0].name });
    await addPayment({
      jobId,
      mediaId: id,
    });
    await acceptProposal(proposalId, jobId, editorId);
    close();
    setIsLoading(false);
    Router.replace("/profile");
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
      <Dropzone onChange={setFiles} label="Anexe o comprovante de pagamento" />

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="SECONDARY"
          onClick={close}
        >
          Cancelar
        </ButtonKnewave>
        <ButtonKnewave
          disabled={isLoading}
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={handleSubmit}
        >
          {isLoading ? "Carregando..." : "Continuar"}
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
