import "react-datepicker/dist/react-datepicker.css";

import ReactDatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";

import * as S from "./styles";

type IDatePicker = {
  onChange: (date: Date) => void;
  selected?: Date;
  placeholder?: string;
  minDate?: Date;
  disabled?: boolean;
};

function DatePicker({ onChange, selected, minDate, disabled }: IDatePicker) {
  return (
    <S.Container>
      <ReactDatePicker
        onChange={onChange}
        selected={selected}
        locale={pt}
        minDate={minDate}
        disabled={disabled}
      />
    </S.Container>
  );
}

export { DatePicker };
