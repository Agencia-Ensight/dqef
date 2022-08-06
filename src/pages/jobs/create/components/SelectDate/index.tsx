import { useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";

import { ButtonKnewave } from "@/components";

import * as S from "./styles";
import { useCreateJob } from "../../CreateJobContext";

export function SelectDate() {
  const { updateData, data, updateStep } = useCreateJob();
  const [delivery, setDelivery] = useState(new Date());

  const tommorrow = new Date();

  function onSubmit() {
    updateData({ delivery });

    updateStep("additional-info");
  }

  console.log(data);

  const router = useRouter();
  return (
    <form>
      <S.BackButton onClick={() => router.back()}>Voltar</S.BackButton>
      <S.HeaderContainer>
        <S.Title>Selecione uma data</S.Title>

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
            selected={delivery}
            onChange={(date: Date) => setDelivery(date)}
            locale={pt}
            placeholderText="Selecione a Data"
            minDate={tommorrow}
            showTimeSelect
          />
        </div>
        <div>
          <label>Nossa previsão de entrega</label>
          <DatePicker
            selected={delivery}
            onChange={(date: Date) => setDelivery(date)}
            locale={pt}
            placeholderText="Selecione a Data"
            minDate={new Date()}
            disabled
          />
        </div>
      </S.InputsContainer>

      <S.Description>
        Conforme previsão acima, a entrega do seu trabalho é efetuada com grande
        antecedência. Isso porque, o estudante tem direito de solicitar as
        alterações que desejar, após a entrega. A previsão é calculada com base
        no do dia do pagamento do trabalho, logo após o interesse do redator,
        portanto, pode variar.
      </S.Description>
      <ButtonKnewave
        variant="PRIMARY"
        type="submit"
        size="sm"
        onClick={onSubmit}
      >
        Próximo
      </ButtonKnewave>
    </form>
  );
}
