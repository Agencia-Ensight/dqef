import { ButtonKnewave } from "../../components/ButtonKnewave";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt";

import * as S from "./styles";
import { useState } from "react";

export default function proposalstudentstep2() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <h3>Voltar</h3>
        <h1>Selecione uma data</h1>
        <p>Para publicar o seu trabalho insira essas informações.</p>
        <label>Data de entrega solicitada pelo professor</label>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          locale={pt}
          placeholderText="Selecione a Data"
          minDate={new Date()}
        />
        <S.Description>
          Conforme previsão acima, a entrega do seu trabalho é efetuada com
          grande antecedência. Isso porque, o estudante tem direito de solicitar
          as alterações que desejar, após a entrega. A previsão é calculada com
          base no do dia do pagamento do trabalho, logo após o interesse do
          redator, portanto, pode variar.
        </S.Description>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Próximo
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
