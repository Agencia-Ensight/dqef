import { ButtonKnewave } from "../../components/ButtonKnewave";
import { useRouter } from "next/router";

import { Input } from "../../components/Input";
import { Select } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

import * as S from "./styles";
import { MultiStepForm } from "../../components/MultiStepForm";
import {
  INSERT_JOB,
  Job,
  JobFormatsData,
  JOB_FORMATS,
} from "../../queries/jobs";
import { useMutation, useQuery } from "@apollo/client";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useRef } from "react";
import JobStep3, { Ref } from "../components/jobs/JobSteps/step3";

export default function proposalstudentstep3(job?: Job) {
  const router = useRouter();

  const { userData } = useContext(AuthContext)!;

  const { data: jobFormats } = useQuery<JobFormatsData>(JOB_FORMATS);
  const [insertJob, { loading, error }] = useMutation(INSERT_JOB);

  const step3Ref = useRef<Ref>(null);

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
        maximum_plagiarism: values.maximum_plagiarism,
        obs: values.obs,
      },
    });
    insertJob({
      variables: {
        higher_course_id: values.higher_course_id,
        job_status_id: "1",
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
        maximum_plagiarism: values.maximum_plagiarism,
        obs: values.obs,
      },
    }).then((response) => {
      const jobId = response.data.insert_jobs_one.id;
      if (step3Ref.current) {
        step3Ref.current.uploadFiles(jobId).then(() => {
          router.push(`/proposalstudentstep4`);
        });
      }
    });
  };

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>
      <S.ContainerInformation>
        <S.HeaderContainer>
          <h1>Últimos Ajustes</h1>
          <S.Steps>3 de 3</S.Steps>
        </S.HeaderContainer>
        <p>Insira os detalhes finais antes de publicar.</p>
        <JobStep3 jobFormats={jobFormats?.job_formats ?? []} ref={step3Ref} />
        <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
          Publicar
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentstep3.auth = true;
