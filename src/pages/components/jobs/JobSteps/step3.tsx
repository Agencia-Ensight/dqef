import { useState } from "react";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";
import { Job, JobFormat } from "../../../../queries/jobs";
import * as S from "./styles3";
import { Input } from "../../../../components/Input";
import { Select } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const JobStep2 = ({
  job,
  jobFormats
}: {
  job?: Job;
  jobFormats: JobFormat[];
}) => {

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file, key) => (
    <li key={key}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <S.InputFields>
      <S.FirstInputContainer>
        <Input
          label="Máximo de Plágio Aceitável"
          placeholder="Insira o Valor"
          mandatory={true}
          required
          type="number"
          defaultValue={job?.plagiarism}
        />
        <S.SelectContainer>
          <label>
            Formato do Trabalho<span>*</span>
          </label>
          <Select className="padrao" placeholder="Selecione o Formato" name="job_format_id" defaultValue={job?.job_format.id}>
            {
              jobFormats?.map((jobFormat) => (
                <option key={jobFormat.id} value={jobFormat.id} selected={jobFormat.id === job?.job_format.id}>
                  {jobFormat.name}
                </option>
              ))
            }
          </Select>
        </S.SelectContainer>
      </S.FirstInputContainer>
      <S.FirstInputContainer>
        <Input
          placeholder="Disposto a Pagar"
          label="Disposto a Pagar"
          mandatory={true}
          required
          name="value"
          defaultValue={job?.value}
        />
        <Input
          placeholder="R$"
          label="Valor Pago ao Redator"
          mandatory={false}
          disabled
          name="value_pay"
        />
      </S.FirstInputContainer>
      <S.FirstInputContainer>
        <Input label="Cupom de desconto" mandatory={false} disabled />
      </S.FirstInputContainer>
      <label>
        Observações<span>*</span>
      </label>
      <textarea
        name=""
        id=""
        rows={2}
        placeholder="ex: Espaço para adicionar algum comentário, dica ou pedido ao redator."
      ></textarea>

      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    </S.InputFields>
  );
}

export default JobStep2;