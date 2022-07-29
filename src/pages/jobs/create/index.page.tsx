import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";

import { schema } from "./schema";
import {
  CreateJobProps,
  GET_JOB_FORMATS,
  INSERT_JOB,
  JobFormatsData,
} from "@/services/graphql/jobs";
import { useUser } from "@/contexts";
// import { JobFormatsData } from "WILL_BE_REMOVED/jobs";
import { Banner } from "./components/Banner";
import { MainInfo } from "./components/MainInfo";
import { SelectDate } from "./components/SelectDate";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Success } from "./components/Success";

import * as S from "./styles";

function CreateJob() {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateJobProps>({
    resolver: yupResolver(schema),
  });
  const [insertJob, { loading, error }] = useMutation(INSERT_JOB);

  const jobFormats = useQuery<JobFormatsData>(GET_JOB_FORMATS);

  const onSubmit = useCallback(
    async (data: CreateJobProps) => {
      await insertJob({
        variables: {
          higher_course_id: data.higher_course_id,
          job_status_id: "1",
          job_type_id: data.job_type_id,
          job_format_id: data.job_format_id,
          instructions: data.instructions,
          title: data.title,
          value: data.value,
          value_pay: data.value,
          date_limit: data.date_limit,
          delivery: data.delivery,
          theme: data.theme,
          knowledge_id: data.knowledge_id,
          user_id: user!.id,
          pages: data.pages,
          words: data.words,
          maximum_plagiarism: data.maximum_plagiarism,
          obs: data.obs,
        },
      });
    },
    [insertJob, user?.id]
  );

  return (
    <S.Wrapper>
      <Banner />
      <S.ContainerInformation>
        {/* <MainInfo /> */}
        {/* <SelectDate /> */}
        {/* <AdditionalInfo /> */}
        <Success />
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("higher_course_id")} />
          <p>{errors.higher_course_id?.message}</p>

          <input {...register("job_status_id")} />
          <p>{errors.job_status_id?.message}</p>

          <input {...register("job_type_id")} />
          <p>{errors.job_type_id?.message}</p>

          <input {...register("title")} />
          <p>{errors.title?.message}</p>

          <input {...register("value")} />
          <p>{errors.value?.message}</p>

          <input {...register("value_pay")} />
          <p>{errors.value_pay?.message}</p>

          <input {...register("date_limit")} />
          <p>{errors.date_limit?.message}</p>

          <input {...register("delivery")} />
          <p>{errors.delivery?.message}</p>

          <input {...register("theme")} />
          <p>{errors.theme?.message}</p>

          <input {...register("knowledge_id")} />
          <p>{errors.knowledge_id?.message}</p>

          <input {...register("user_id")} />
          <p>{errors.user_id?.message}</p>

          <input {...register("pages")} />
          <p>{errors.pages?.message}</p>

          <input {...register("words")} />
          <p>{errors.words?.message}</p>

          <input {...register("instructions")} />
          <p>{errors.instructions?.message}</p>

          <input {...register("job_format_id")} />
          <p>{errors.job_format_id?.message}</p>

          <input {...register("obs")} />
          <p>{errors.obs?.message}</p>

          <input {...register("maximum_plagiarism")} />
          <p>{errors.maximum_plagiarism?.message}</p>

          {loading ? (
            <p>Carregando...</p>
          ) : (
            <button type="submit">Enviar</button>
          )}
          {error && error.message}
        </form> */}
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export default CreateJob;
