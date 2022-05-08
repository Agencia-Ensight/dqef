import { useState } from "react";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";
import { Job } from "../../../../queries/jobs";
import * as S from "./styles2";

const JobStep2 = ({
  job,
}: {
  job?: Job;
}) => {
  const [startDate, setStartDate] = useState(job?.date_limit ? new Date(job.date_limit) : new Date());

  return (
    <>
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
    </>
  );
}

export default JobStep2;