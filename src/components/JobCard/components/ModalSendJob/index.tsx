import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import { useJobDelivery, useMedia } from "@/hooks";
import { ButtonKnewave, Input } from "@/components";
import { useModal, useToast } from "@/contexts";

import * as S from "./styles";
import { IModalSendJob } from "./typings";
import { ModalApprovedJob } from "./components/ModalApprovedJob";
import { uploadFile } from "@/services/api/upload";
import { usePlagiarism } from "@/hooks/usePlagiarism";

export function ModalSendJob({
  jobId,
  acceptPlagiarism,
  plagiarismOfJob,
  dateLimitOfRequestChanges,
}: IModalSendJob) {
  const isMobile = useMedia("(max-width:600px)");
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const { close, open } = useModal();
  const { addToast } = useToast();
  const { delivery } = useJobDelivery();
  const { checkPLagiarism } = usePlagiarism();

  async function uploadJobFiles() {
    try {
      if (!files) {
        addToast({
          type: "error",
          msg: "Nenhum arquivo selecionado",
        });
        return;
      }
      const uploadIds: string[] = [];

      for await (const file of files) {
        const { id } = await uploadFile({ file, title: file.name });
        uploadIds.push(id);
      }

      return uploadIds;
    } catch (error) {
      addToast({ type: "error", msg: "Aconteceu um erro ao enviar o arquivo" });
    }
  }

  async function handleJobApproved() {
    setIsLoading(true);

    const uploadIds = await uploadJobFiles();

    const checkPlag = await checkPLagiarism();

    if (!checkPlag) {
      addToast({
        type: "error",
        msg: "Seus arquivos não passaram pelo teste de plágio.",
      });
      return;
    }

    await delivery(jobId, "partial-delivery", uploadIds);
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

      <S.FileDiv>
        <label htmlFor="file" className="label-inputfile">
          Anexar Arquivos
          <AiOutlineDownload />
        </label>
        <input
          type="file"
          multiple
          className="inputfile-root"
          id="file"
          onChange={(e) => setFiles(e.target.files)}
        />
      </S.FileDiv>

      <S.ButtonInputSolid>
        <Input placeholder="Observações" className="inputsolido"></Input>
      </S.ButtonInputSolid>
      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="SECONDARY"
          onClick={close}
          loading={isLoading}
          disabled={isLoading}
        >
          Cancelar
        </ButtonKnewave>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={handleJobApproved}
        >
          Continuar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
