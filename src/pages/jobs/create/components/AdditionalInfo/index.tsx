import { ButtonKnewave, Input, ComboboxComp } from "@/components";
import { useUser } from "@/contexts";
import { INSERT_JOB } from "@/services/graphql/jobs";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDownload } from "react-icons/ai";
import { useCreateJob } from "../../CreateJobContext";
import { CreateJobProps } from "../../typings";
import { schema } from "./schema";

import * as S from "./styles";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

const formatBrl = new Intl.NumberFormat("pt-BR");

function AdditionalInfo() {
  const { user } = useUser();
  const { updateData, data, updateStep } = useCreateJob();
  const [maximum_plagiarism, setMaximum_plagiarism] = useState("");
  const [job_format_id, setJob_format_id] = useState(0);
  const [obs, setObs] = useState("");
  const [value, setValue] = useState(0);
  const [createJob, jobData] = useMutation(INSERT_JOB);

  const value_pay = value - value * 0.3;

  console.log(user?.id);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateData({ maximum_plagiarism, job_format_id, obs, value });
    console.log(value_pay);
    console.log(jobData);
    try {
      await createJob({
        variables: {
          delivery: data.delivery,
          higher_course_id: 1,
          instructions: data.instructions,
          job_format_id: 1,
          job_type_id: 1,
          knowledge_id: 1,
          maximum_plagiarism: maximum_plagiarism,
          obs: obs,
          pages: data.pages,
          thema: data.theme,
          title: data.title,
          value: value,
          words: data.words,
          value_pay: value_pay,
          job_status_id: 1,
          date_limit: data.delivery,
          user_id: user?.id,
        },
      });
      updateStep("success");
    } catch (err) {
      console.log(err);
    }
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
            onSelectedChange={(fruit) => setJob_format_id(fruit.id)}
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
