import { ButtonKnewave } from "../../components/ButtonKnewave";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt";

import { useRouter } from "next/router";

import * as S from "./styles";
import { useState } from "react";
import { MultiStepForm } from "../../components/MultiStepForm";
import { Job } from "../../queries/jobs";
import JobStep2 from "../components/jobs/JobSteps/step2";

export default function proposalstudentstep2() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <MultiStepForm
          stateName="proposalData"
          onSubmit={(data: any) => {
            router.push("/proposalstudentstep3");
          }}
          onFail={() => {
            router.push("/proposalstudentstep1");
          }}
        >
          <a onClick={() => router.back()}>Voltar</a>
          <S.HeaderContainer>
            <h1>Selecione uma data</h1>

            <S.Steps>2 de 3</S.Steps>
          </S.HeaderContainer>
          <p>Para publicar o seu trabalho insira essas informações.</p>
          <JobStep2/>
          <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
            Próximo
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentstep2.auth = true;