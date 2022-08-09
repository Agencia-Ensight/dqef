import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";

import { ButtonKnewave, Input, ComboboxComp, IRenderProps } from "@/components";
import { INSERT_JOB } from "@/services/graphql/jobs";
import * as S from "./styles";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

const formatBrl = new Intl.NumberFormat("pt-BR");

function AdditionalInfo({ onComplete, prevRes }: IRenderProps) {
  const [maximum_plagiarism, setMaximum_plagiarism] = useState("");
  const [job_format_id, setJob_format_id] = useState(1);
  const [obs, setObs] = useState("");
  const [value, setValue] = useState(0);

  const [createJob, jobData] = useMutation(INSERT_JOB);
  const value_pay = value - value * 0.3;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onComplete({
      ...prevRes,
      job_format_id,
      maximum_plagiarism,
      obs,
      value,
      value_pay,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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
            mandatory={false}
            type="number"
            name="maximum_plagiarism"
            id="maximum_plagiarism"
            value={maximum_plagiarism}
            onChange={(e) => setMaximum_plagiarism(e.target.value)}
          />
          <ComboboxComp
            label="Formato do Trabalho"
            items={fruits}
            onSelectedChange={(item) => setJob_format_id(item.id)}
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
            value={value_pay}
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
      <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
        Publicar
      </ButtonKnewave>
    </form>
  );
}

export { AdditionalInfo };
