import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import * as S from "./styles";
import { useUser } from "@/contexts";
import { Stepper } from "@/components";
import {
  Banner,
  MainInfo,
  SelectDate,
  AdditionalInfo,
  Success,
} from "./components";
import { CreateJobProps, INSERT_JOB } from "@/services/graphql/jobs";

function CreateJob() {
  const { user } = useUser();

  const [insertJob, { loading, error, data }] = useMutation(INSERT_JOB);

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
          value_pay: data.value_pay,
          date_limit: data.date_limit,
          delivery: data.delivery,
          thema: data.thema,
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
        {!data ? (
          <Stepper<CreateJobProps>
            onComplete={(data) => onSubmit(data)}
            steps={[
              {
                label: "MainInfo",
                render: (onComplete, prevRes) => (
                  <MainInfo onComplete={onComplete} prevRes={prevRes} />
                ),
              },
              {
                label: "SelectDate",
                render: (onComplete, prevRes) => (
                  <SelectDate onComplete={onComplete} prevRes={prevRes} />
                ),
              },
              {
                label: "AdditionalInfo",
                render: (onComplete, prevRes) => (
                  <AdditionalInfo onComplete={onComplete} prevRes={prevRes} />
                ),
              },
            ]}
          />
        ) : (
          <Success />
        )}
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export default CreateJob;
