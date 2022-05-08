import { ButtonKnewave } from "../../components/ButtonKnewave";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt";

import { useRouter } from "next/router";

import * as S from "./styles";
import { useState } from "react";
import { MultiStepForm } from "../../components/MultiStepForm";
import { Job } from "../../queries/jobs";

export default function proposalstudentstep2(job?: Job) {
  const [startDate, setStartDate] = useState(job?.date_limit ? new Date(job.date_limit) : new Date());

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
            if (job) {
              router.push(`/proposalstudentstep3/${job.id}`);
              return;
            }
            router.push("/proposalstudentstep3");
          }}
          onFail={() => {
            if (job) {
              router.push(`/proposalstudentstep1/${job.id}`);
              return;
            }
            router.push("/proposalstudentstep1");
          }}
        >
          <a onClick={() => router.back()}>Voltar</a>
          <S.HeaderContainer>
            <h1>Selecione uma data</h1>

            <S.Steps>2 de 3</S.Steps>
          </S.HeaderContainer>
          <p>Para publicar o seu trabalho insira essas informações.</p>
          <S.InputsContainer>
            <div>
              <label>
                Data de entrega solicitada pelo professor<span>*</span>
              </label>
              <DatePicker
                name="date_limit"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                locale={pt}
                placeholderText="Selecione a Data"
                minDate={new Date()}
                showTimeSelect
              // showTimeInput
              // timeFormat="90"
              // timeCaption="32"
              // showTimeSelectOnly
              />
            </div>
            <div>
              <label>Nossa previsão de entrega</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                locale={pt}
                placeholderText="Selecione a Data"
                minDate={new Date()}
                disabled
              />
            </div>
          </S.InputsContainer>

          <S.Description>
            Conforme previsão acima, a entrega do seu trabalho é efetuada com
            grande antecedência. Isso porque, o estudante tem direito de solicitar
            as alterações que desejar, após a entrega. A previsão é calculada com
            base no do dia do pagamento do trabalho, logo após o interesse do
            redator, portanto, pode variar.
          </S.Description>
          <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
            Próximo
          </ButtonKnewave>
        </MultiStepForm>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

proposalstudentstep2.auth = true;