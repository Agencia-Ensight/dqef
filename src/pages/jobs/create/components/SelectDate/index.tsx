import "react-datepicker/dist/react-datepicker.css";
import { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt-BR";
import { addDays, differenceInDays, startOfDay, subDays, formatDistance } from "date-fns";

import { ButtonKnewave, IRenderProps } from "@/components";
import * as S from "./styles";

const today = startOfDay(new Date());
const tomorrow = addDays(today, 1);

export function SelectDate({ onComplete, prevRes, onPrevStep }: IRenderProps) {
  const [deliveryAt, setDeliveryAt] = useState(tomorrow);

  const deadline = useMemo(() => {
    const eachDay = differenceInDays(deliveryAt, today) + 1;

    const daysToAdd = eachDay % 2 === 0 ? eachDay / 2 : (eachDay - 1) / 2 + 1;

    return subDays(deliveryAt, daysToAdd);
  }, [deliveryAt]);

  console.log(formatDistance(deliveryAt, today))


  function onSubmit() {
    onComplete({
      ...prevRes,
      deliveryAt,
      dateLimit: deadline,
    });
  }

  return (
    <form>
      <S.BackButton onClick={() => onPrevStep()}>Voltar</S.BackButton>
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
            selected={deliveryAt}
            onChange={(date: Date) => setDeliveryAt(date)}
            locale={pt}
            placeholderText="Selecione a Data"
            minDate={tomorrow}
            showTimeSelect
          />
        </div>
        <div>
          <label>Nossa previsão de entrega</label>
          <DatePicker
            selected={deadline}
            onChange={(date: Date) => setDeliveryAt(date)}
            locale={pt}
            placeholderText="Selecione a Data"
            minDate={tomorrow}
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
