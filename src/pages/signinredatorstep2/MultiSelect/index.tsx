import Select from "react-select";
import * as S from "./styles";

import { colourOptions } from "./data";

export function MultiSelect() {
  return (
    <S.Wrapper>
      <Select
        defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="Selecione da nossa Lista"

        // defaultInputValue="Banan"
      />
    </S.Wrapper>
  );
}
