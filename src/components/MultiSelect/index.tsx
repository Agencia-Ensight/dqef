import { useMemo, useState } from "react";

import Select, { createFilter } from "react-select";

import * as S from "./styles";
import { Props } from "./typings";

import { colorOptions, ColorOption } from "./data";

function MultiSelect({
  options,
  id,
  name,
  labelField = "name",
  valueField = "id",
}: Props) {
  const [selectedOption, setSelectedOption] = useState<any>([]);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const inputValue = useMemo(() => {
    return selectedOption?.map((option: any) => option.id).join(",");
  }, [selectedOption]);

  return (
    <S.Wrapper>
      <Select
        isMulti
        options={options}
        value={selectedOption}
        getOptionLabel={(option) => option[labelField]}
        getOptionValue={(option) => option[valueField]}
        filterOption={createFilter({ ignoreAccents: false })}
        classNamePrefix="Selecione da nossa Lista"
        className="basic-multi-select"
        onChange={(e) => handleChange(e)}
      />
      <input type="hidden" name={name} id={id} value={inputValue} />
    </S.Wrapper>
  );
}

export { MultiSelect };
