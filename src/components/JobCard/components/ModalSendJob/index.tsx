import { useState } from "react";

import { useJobDelivery, useCreateChange, useMedia } from "@/hooks";
import { Button, Dropzone, Input } from "@/components";
import { useModal, useToast } from "@/contexts";

import * as S from "./styles";
import { IModalSendJob } from "./typings";
import { ModalApprovedJob } from "./components/ModalApprovedJob";
import { uploadFile } from "@/services/api/upload";
import { usePlagiarism } from "@/hooks/usePlagiarism";

const formatsThatNeedTestPlagiarism = [
  3, 5, 6, 8, 10, 11, 12, 16, 17, 18, 19, 20, 21, 23, 26, 27, 29, 30, 31, 32,
  33, 35,
];

export function ModalSendJob({
  jobId,
  acceptPlagiarism,
  isLastDelivery,
  jobFormatId,
  dateLimitOfRequestChanges,
}: IModalSendJob) {
  const isMobile = useMedia("(max-width:600px)");
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [obs, setObs] = useState("");
  const { close, open } = useModal();
  const { addToast } = useToast();
  const { delivery } = useJobDelivery();
  const { createChange } = useCreateChange(jobId);
  const { checkPlagiarism } = usePlagiarism();

  async function uploadJobFiles() {
    const uploadIds: { name: string; id: string }[] = [];

    for await (const file of files) {
      const { id } = await uploadFile({ file, title: file.name });
      uploadIds.push({ id, name: file.name });
    }

    return uploadIds;
  }

  async function handleJobApproved() {
    setIsLoading(true);

    if (!files) {
      addToast({
        type: "error",
        msg: "Nenhum arquivo selecionado",
      });
      return;
    }

    const medias = await uploadJobFiles();

    if (formatsThatNeedTestPlagiarism.includes(jobFormatId)) {
      for await (const media of medias) {
        try {
          await checkPlagiarism(media.id);
        } catch (err) {}
      }
    }

    const mediaIds = medias.map((media) => media.id);

    if (isLastDelivery) {
      await createChange({ obs, mediaIds, isEditor: true });
    } else {
      await delivery({ obs, mediaIds, jobId });
    }

    addToast({ type: "success", msg: "Sucesso! Você enviou o trabalho!" });

    setIsLoading(false);
    close();
    open("Trabalho Aprovado!", {
      content: () => (
        <ModalApprovedJob
          dateLimitOfRequestChanges={dateLimitOfRequestChanges}
        />
      ),
    });
  }

  // if (isLoading) {
  //   return (
  //     <>
  //       <h1>Um momento, estamos verificando</h1>
  //       <S.NerdImage>
  //         <img src="/images/sendwork.png" alt="" />
  //       </S.NerdImage>

  //       <S.TextInformation>
  //         <h3>Limite Aceitável do Trabalho</h3>
  //         <h2>{acceptPlagiarism}%</h2>
  //       </S.TextInformation>
  //     </>
  //   );
  // }

  // if (true) {
  //   <>
  //     <S.NerdImage>
  //       <img src="/images/sendwork.png" alt="" />
  //     </S.NerdImage>

  //     <S.TextInformation>
  //       <h3>Limite Aceitável do Trabalho</h3>
  //       <h2>{acceptPlagiarism}%</h2>
  //     </S.TextInformation>
  //     <S.TextInformation>
  //       <h3>Limite do Trabalho realizado</h3>
  //       <h2>{plagiarismOfJob}%</h2>
  //     </S.TextInformation>
  //     <S.ButtonBang>
  //       <AiOutlineDownload color="#42A4EF" />
  //       <p>Baixar Relatório de Plágio</p>
  //     </S.ButtonBang>

  //     <S.ButtonFinaleira>
  //       <ButtonKnewave
  //         size={isMobile ? "sm" : "lg"}
  //         variant="SECONDARY"
  //         onClick={close}
  //       >
  //         Cancelar
  //       </ButtonKnewave>
  //       <ButtonKnewave
  //         size={isMobile ? "sm" : "lg"}
  //         variant="PRIMARY"
  //         onClick={() => handleJobApproved()}
  //       >
  //         Continuar
  //       </ButtonKnewave>
  //     </S.ButtonFinaleira>
  //   </>;
  // }

  return (
    <>
      <S.NerdImage>
        <img src="/images/insertwork.png" alt="" />
      </S.NerdImage>

      <Dropzone onChange={setFiles} />

      <S.ButtonInputSolid>
        <Input
          placeholder="Observações"
          className="inputsolido"
          onChange={(e) => setObs(e.target.value)}
          value={obs}
        ></Input>
      </S.ButtonInputSolid>
      <S.ButtonFinaleira>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={handleJobApproved}
          loading={isLoading}
          disabled={isLoading}
        >
          Continuar
        </Button>
      </S.ButtonFinaleira>
    </>
  );
}
