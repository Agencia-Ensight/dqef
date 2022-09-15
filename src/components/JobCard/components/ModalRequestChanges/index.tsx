import { useCreateChange, useMedia } from "@/hooks";
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
  const [isLoading, setIsLoading] = useState(false);
  const { close } = useModal();
  const [files, setFiles] = useState<File[]>([]);
  const [changes, setChanges] = useState("");
  const { addToast } = useToast();
  const { createChange } = useCreateChange(jobId);

  async function uploadJobFiles() {
    const uploadIds: string[] = [];

    for await (const file of files) {
      const { id } = await uploadFile({ file, title: file.name });
      uploadIds.push(id);
    }

    return uploadIds;
  }

  async function handleSubmit() {
    setIsLoading(true);

    if (!files) {
      addToast({
        type: "error",
        msg: "Nenhum arquivo selecionado",
      });
      return;
    }

    const mediaIds = await uploadJobFiles();

    await createChange({ mediaIds, obs: changes, isEditor: false });

    addToast({ type: "success", msg: "Sucesso! Você enviou!" });
    close();
    setIsLoading(false);
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
