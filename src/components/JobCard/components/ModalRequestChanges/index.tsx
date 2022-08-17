import { AiOutlineDownload } from "react-icons/ai";

import { useMedia } from "@/hooks";
import { ButtonKnewave } from "@/components";

import * as S from "./styles";

type IModalRequestRequestChanges = {
  jobId: string;
};

export function ModalRequestChanges({ jobId }: IModalRequestRequestChanges) {
  const isMobile = useMedia("(max-width:600px)");

  return (
    <>
      <S.TextInformation>
        <p>Escreva o que você quer de alteração e/ou anexe um arquivo</p>
      </S.TextInformation>

      <S.InputText></S.InputText>

      <S.FileDiv>
        <label htmlFor="file" className="label-inputfile">
          Anexar Arquivos
          <AiOutlineDownload />
        </label>
        <input
          type="file"
          multiple={true}
          className="inputfile-root"
          id="file"
        />
      </S.FileDiv>

      <S.ButtonFinaleira>
        <ButtonKnewave size={isMobile ? "sm" : "lg"} variant="PRIMARY">
          Enviar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
