import { AiOutlineDownload } from "react-icons/ai";

import { useCreateChange, useJob, useMedia, useUpdateJob } from "@/hooks";
import { ButtonKnewave, Dropzone, Input } from "@/components";

import * as S from "./styles";
import { useState } from "react";
import { uploadFile } from "@/services/api/upload";
import { useModal, useToast } from "@/contexts";

type IModalRequestRequestChanges = {
  jobId: string;
};

export function ModalRequestChanges({ jobId }: IModalRequestRequestChanges) {
  const isMobile = useMedia("(max-width:600px)");
  const { close } = useModal();
  const [files, setFiles] = useState<File[]>([]);
  const [changes, setChanges] = useState("");
  const { addToast } = useToast();
  const { createChange, isLoading } = useCreateChange(jobId);

  async function handleSubmit() {
    if (!files) {
      addToast({
        type: "error",
        msg: "Nenhum arquivo selecionado",
      });
      return;
    }

    await createChange({ media: files[0], obs: changes });

    addToast({ type: "success", msg: "Sucesso! Você enviou!" });
    close();
  }

  return (
    <>
      <S.TextInformation>
        <p>Escreva o que você quer de alteração e/ou anexe um arquivo</p>
      </S.TextInformation>

      <Input
        label="Alterações"
        placeholder="Alterações"
        required
        value={changes}
        onChange={(e) => setChanges(e.target.value)}
      />

      <Dropzone onChange={setFiles} />

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={handleSubmit}
          disabled={isLoading}
          loading={isLoading}
        >
          Enviar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
