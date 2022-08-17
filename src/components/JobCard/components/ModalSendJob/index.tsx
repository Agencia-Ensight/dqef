import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import { useMedia } from "@/hooks";
import { ButtonKnewave, Input } from "@/components";
import { useModal } from "@/contexts";

import * as S from "./styles";
import { IModalSendJob } from "./typings";
import { ModalApprovedJob } from "./components/ModalApprovedJob";

export function ModalSendJob({
  acceptPlagiarism,
  plagiarismOfJob,
  dateLimitOfRequestChanges,
}: IModalSendJob) {
  const isMobile = useMedia("(max-width:600px)");
  const { close, open } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);

  function handleJobApproved() {
    open("Trabalho Aprovado!", {
      content: () => (
        <ModalApprovedJob
          dateLimitOfRequestChanges={dateLimitOfRequestChanges}
        />
      ),
    });
  }

  if (isLoading) {
    return (
      <>
        <h1>Um momento, estamos verificando</h1>
        <S.NerdImage>
          <img src="/images/sendwork.png" alt="" />
        </S.NerdImage>

        <S.TextInformation>
          <h3>Limite Aceitável do Trabalho</h3>
          <h2>{acceptPlagiarism}%</h2>
        </S.TextInformation>
      </>
    );
  }

  if (DataTransferItemList) {
    <>
      <S.NerdImage>
        <img src="/images/sendwork.png" alt="" />
      </S.NerdImage>

      <S.TextInformation>
        <h3>Limite Aceitável do Trabalho</h3>
        <h2>{acceptPlagiarism}%</h2>
      </S.TextInformation>
      <S.TextInformation>
        <h3>Limite do Trabalho realizado</h3>
        <h2>{plagiarismOfJob}%</h2>
      </S.TextInformation>
      <S.ButtonBang>
        <AiOutlineDownload color="#42A4EF" />
        <p>Baixar Relatório de Plágio</p>
      </S.ButtonBang>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="SECONDARY"
          onClick={close}
        >
          Cancelar
        </ButtonKnewave>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={() => handleJobApproved()}
        >
          Continuar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>;
  }

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
          multiple={true}
          className="inputfile-root"
          id="file"
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
