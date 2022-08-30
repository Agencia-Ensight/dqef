import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";

import { ButtonKnewave, Input, ComboboxComp, IRenderProps } from "@/components";
import { INSERT_JOB } from "@/services/graphql/jobs";
import { useUser } from "@/contexts";
import { useMediaTypes } from "@/hooks";
import * as S from "./styles";

function AdditionalInfo({ onComplete, prevRes, onPrevStep }: IRenderProps) {
  const mediaTypes = useMediaTypes();
  const [maxPlagiarism, setMaxPlagiarism] = useState(0);
  const [jobMediaType, setJobMediaType] = useState(1);
  const [obs, setObs] = useState("");
  const [value, setValue] = useState(0);
  const { user } = useUser();

  const editorValue = value - value * 0.3;

  const [insertJob, { loading }] = useMutation(INSERT_JOB);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await insertJob({
        variables: {
          ...prevRes,
          user_id: user?.id,
          job_status_id: 1,
          job_type_id: 1,
          job_media_type_id: jobMediaType,
          maximum_plagiarism: maxPlagiarism,
          obs,
          value,
          value_pay: editorValue,
        },
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
            name="value_pay"
            value={`R$ ${editorValue}`}
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
        {/* <label>Anexar arquivos</label>
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} name="attachments" />
            <S.IconContainer>
              <AiOutlineDownload size={35} color="#000" />
            </S.IconContainer>
          </div>
          <aside>
            <ul>{files}</ul>
          </aside>
        </section> */}
      </S.InputFields>
      <ButtonKnewave
        variant="PRIMARY"
        type="submit"
        size="sm"
        disabled={loading}
      >
        {loading ? "Carregando..." : "Publicar"}
      </ButtonKnewave>
    </form>
  );
}

export { AdditionalInfo };
