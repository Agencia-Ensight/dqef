import { ButtonKnewave } from "../../components/ButtonKnewave";
import { useRouter } from "next/router";

import { Input } from "../../components/Input";
import { Select } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

import * as S from "./styles";
import { MultiStepForm } from "../../components/MultiStepForm";
import { INSERT_JOB, JobFormatsData, JOB_FORMATS } from "../../queries/jobs";
import { useMutation, useQuery } from "@apollo/client";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export default function proposalstudentstep3() {
  const router = useRouter();

  const { userData } = useContext(AuthContext)!;

  const { data: jobFormats } = useQuery<JobFormatsData>(JOB_FORMATS);
  const [insertJob, { loading, error }] = useMutation(INSERT_JOB);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file, key) => (
    <li key={key}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const handleSubmit = async (values: any) => {
    console.log({
      variables: {
        higher_course_id: values.higher_course_id,
        job_status_id: 1,
        job_type_id: values.job_type_id, 
        job_format_id: values.job_format_id,
        title: values.title, 
        value: values.value, 
        instructions: values.instructions,
        value_pay: values.value,
        date_limit: values.date_limit,
        delivery: new Date(), 
        theme: values.theme, 
        knowledge_id: values.knowledge_id,
        user_id: userData.id,
        pages: values.pages, 
        words: values.words,
      }
    });
    insertJob({
      variables: {
        higher_course_id: values.higher_course_id,
        job_status_id: '1',
        job_type_id: values.job_type_id, 
        job_format_id: values.job_format_id,
        instructions: values.instructions,
        title: values.title, 
        value: values.value, 
        value_pay: values.value,
        date_limit: values.date_limit,
        delivery: new Date(), 
        theme: values.theme, 
        knowledge_id: values.knowledge_id,
        user_id: userData.id,
        pages: values.pages, 
        words: values.words,
      }
    })
  }

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <MultiStepForm
          stateName="proposalData"
          onSubmit={(data: any) => {
            handleSubmit(data);
          }}
          onFail={() => {
            router.push("/proposalstudentstep1");
          }}
        >
          <a onClick={() => router.back()}>Voltar</a>
          <S.HeaderContainer>
            <h1>Últimos Ajustes</h1>
            <S.Steps>3 de 3</S.Steps>
          </S.HeaderContainer>
          <p>Insira os detalhes finais antes de publicar.</p>
          <S.InputFields>
            <S.FirstInputContainer>
              <Input
                label="Máximo de Plágio Aceitável"
                placeholder="Insira o Valor"
                mandatory={true}
                required
                type="number"
              />
              <S.SelectContainer>
                <label>
                  Formato do Trabalho<span>*</span>
                </label>
                <Select className="padrao" placeholder="Selecione o Formato" name="job_format_id">
                  {
                    jobFormats?.job_formats.map((jobFormat) => (
                      <option key={jobFormat.id} value={jobFormat.id}>
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
          <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
            Publicar
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentstep3.auth = true;