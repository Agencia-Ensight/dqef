import { FormEvent, useState } from "react";

import {
  ButtonKnewave,
  Input,
  ComboboxComp,
  IRenderProps,
  Dropzone,
} from "@/components";
import { useUser } from "@/contexts";
import { useMediaTypes } from "@/hooks";
import * as S from "./styles";
import { useCreateJob } from "@/hooks/useCreateJob";

function AdditionalInfo({ onComplete, prevRes, onPrevStep }: IRenderProps) {
  const mediaTypes = useMediaTypes();
  const [maxPlagiarism, setMaxPlagiarism] = useState(0);
  const [jobMediaType, setJobMediaType] = useState(1);
  const [obs, setObs] = useState("");
  const [value, setValue] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const { user } = useUser();
  const editorPrice = value - value * 0.3;
  const { createJob, isLoading } = useCreateJob();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await createJob({
        ...prevRes,
        maxPlagiarism,
        mediaTypeId: jobMediaType,
        obs,
        files,
        editorPrice,
        userId: user!.id,
        price: value,
      });
      onComplete({});
    } catch {}
  }

  return (
    <form onSubmit={handleSubmit}>
      <S.BackButton onClick={() => onPrevStep()}>Voltar</S.BackButton>

      <S.HeaderContainer>
        <S.Title>Últimos Ajustes</S.Title>
        <S.Steps>3 de 3</S.Steps>
      </S.HeaderContainer>
      <p>Insira os detalhes finais antes de publicar.</p>
      <S.InputFields>
        <S.FirstInputContainer>
          <Input
            label="Máximo de Plágio Aceitável"
            placeholder="Insira o Valor"
            mandatory
            type="number"
            name="maximum_plagiarism"
            id="maximum_plagiarism"
            value={maxPlagiarism}
            onChange={(e) => setMaxPlagiarism(Number(e.target.value))}
            max={100}
            required
          />
          <ComboboxComp
            mandatory
            label="Formato do Trabalho"
            items={mediaTypes.data || []}
            value={jobMediaType}
            onSelectedChange={(item) => setJobMediaType(item.id)}
          />
        </S.FirstInputContainer>
        <S.FirstInputContainer>
          <Input
            placeholder="Disposto a Pagar"
            label="Disposto a Pagar"
            mandatory={true}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <Input
            label="Valor Pago ao Redator"
            mandatory={false}
            disabled
            value={`R$ ${editorPrice}`}
          />
        </S.FirstInputContainer>
        <S.FirstInputContainer>
          <Input label="Cupom de desconto" mandatory={false} disabled />
        </S.FirstInputContainer>
        <label>
          Observações<span>*</span>
        </label>
        <textarea
          id="obs"
          rows={4}
          placeholder="ex: Espaço para adicionar algum comentário, dica ou pedido ao redator."
          value={obs}
          onChange={(e) => setObs(e.target.value)}
        ></textarea>
        <Dropzone onChange={setFiles} />
      </S.InputFields>
      <ButtonKnewave
        variant="PRIMARY"
        type="submit"
        size="sm"
        loading={isLoading}
      >
        Publicar
      </ButtonKnewave>
    </form>
  );
}

export { AdditionalInfo };
